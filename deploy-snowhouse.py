#!/usr/bin/env python3
"""
Deploy coco-presentation to Snowhouse SPCS.
Uses existing TEMP.MMARZILLO_COCO schema and COCO_IMAGES repo.
"""
import subprocess, sys, textwrap
import snowflake.connector

REGISTRY   = "sfcogsops-snowhouse-aws-us-west-2.registry.snowflakecomputing.com"
DB         = "TEMP"
SCHEMA     = "MMARZILLO_COCO"
REPO       = "COCO_IMAGES"
IMAGE_REPO = f"temp/mmarzillo_coco/coco_images"
IMAGE      = "coco-presentation"
POOL       = "SYSTEM_COMPUTE_POOL_CPU"

def run(cmd):
    print(f"  $ {cmd}")
    r = subprocess.run(cmd, shell=True)
    if r.returncode != 0:
        sys.exit(r.returncode)

def sql(cur, stmt):
    stmt = stmt.strip()
    print(f"  SQL> {stmt[:90]}{'...' if len(stmt)>90 else ''}")
    cur.execute(stmt)

print("=== Connecting to Snowhouse (browser will open) ===")
conn = snowflake.connector.connect(
    account="SFCOGSOPS-SNOWHOUSE_AWS_US_WEST_2",
    user="MMARZILLO",
    authenticator="externalbrowser",
)
cur = conn.cursor()
print("  Connected.\n")

# Find the service name
print("=== Finding existing service ===")
cur.execute(f"SHOW SERVICES IN SCHEMA {DB}.{SCHEMA}")
services = cur.fetchall()
if not services:
    print("No services found in TEMP.MMARZILLO_COCO — creating one.")
    SERVICE = "COCO_PRESENTATION_SERVICE"
    spec = textwrap.dedent(f"""\
        spec:
          containers:
            - name: web
              image: /{IMAGE_REPO}/{IMAGE}:latest
              resources:
                requests:
                  memory: 256M
                  cpu: 0.5
                limits:
                  memory: 512M
                  cpu: 1
          endpoints:
            - name: web
              port: 8080
              public: true
    """)
    sql(cur, f"""
        CREATE SERVICE {DB}.{SCHEMA}.{SERVICE}
          IN COMPUTE POOL {POOL}
          FROM SPECIFICATION $${spec}$$
          MIN_INSTANCES = 1 MAX_INSTANCES = 1
    """)
    sql(cur, f"GRANT USAGE ON SERVICE {DB}.{SCHEMA}.{SERVICE} TO ROLE PUBLIC")
else:
    SERVICE = services[0][1]
    print(f"  Found service: {SERVICE}")

print("\n=== Login to Snowhouse registry ===")
run("snow spcs image-registry login --connection sfcogsops-snowhouse_aws_us_west_2")

print("\n=== Build Docker image ===")
run("docker build --platform linux/amd64 -t coco-presentation:latest .")

print("\n=== Tag and push to Snowhouse registry ===")
run(f"docker tag {IMAGE}:latest {REGISTRY}/{IMAGE_REPO}/{IMAGE}:latest")
run(f"docker push {REGISTRY}/{IMAGE_REPO}/{IMAGE}:latest")

print("\n=== Suspend → Resume service ===")
sql(cur, f"ALTER SERVICE {DB}.{SCHEMA}.{SERVICE} SUSPEND")
sql(cur, f"ALTER SERVICE {DB}.{SCHEMA}.{SERVICE} RESUME")

print("\n=== Endpoint URL ===")
cur.execute(f"SHOW ENDPOINTS IN SERVICE {DB}.{SCHEMA}.{SERVICE}")
for row in cur.fetchall():
    print(f"  {row}")

cur.close()
conn.close()
print("\n=== Deploy complete! ===")
