#!/bin/bash
set -e

REPO_URL="sfsenorthamerica-hol-mattmarzillo.registry.snowflakecomputing.com/coco_presentation_db/app/images"
IMAGE_NAME="coco-presentation"
TAG="latest"

echo "=== Step 1: Build Docker image ==="
docker build --platform linux/amd64 -t ${IMAGE_NAME}:${TAG} .

echo "=== Step 2: Tag for Snowflake registry ==="
docker tag ${IMAGE_NAME}:${TAG} ${REPO_URL}/${IMAGE_NAME}:${TAG}

echo "=== Step 3: Login to Snowflake registry ==="
echo "When prompted, enter your Snowflake username and password:"
docker login ${REPO_URL}

echo "=== Step 4: Push image ==="
docker push ${REPO_URL}/${IMAGE_NAME}:${TAG}

echo "=== Step 5: Create SPCS service ==="
echo "Run the following SQL in Snowflake:"
cat <<'SQL'

USE DATABASE COCO_PRESENTATION_DB;
USE SCHEMA APP;

CREATE SERVICE IF NOT EXISTS COCO_PRESENTATION_SERVICE
  IN COMPUTE POOL SYSTEM_COMPUTE_POOL_CPU
  FROM SPECIFICATION $$
spec:
  containers:
    - name: web
      image: /coco_presentation_db/app/images/coco-presentation:latest
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
$$
  MIN_INSTANCES = 1
  MAX_INSTANCES = 1;

-- Grant public access
GRANT USAGE ON SERVICE COCO_PRESENTATION_SERVICE TO ROLE PUBLIC;

-- Get the endpoint URL
SHOW ENDPOINTS IN SERVICE COCO_PRESENTATION_SERVICE;

SQL

echo "=== Done! ==="
echo "After running the SQL, the app will be available at the endpoint URL shown."
