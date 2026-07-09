#!/bin/bash
set -e

CONN="sfcogsops-snowhouse_aws_us_west_2"
REGISTRY="sfcogsops-snowhouse-aws-us-west-2.registry.snowflakecomputing.com"
IMAGE_REPO="temp/mmarzillo_coco/coco_images"
IMAGE="coco-presentation"
DB="TEMP"
SCHEMA="MMARZILLO_COCO"
SERVICE="COCO_PRESENTATION_SERVICE"
POOL="SYSTEM_COMPUTE_POOL_CPU"

echo "=== 1/5  Login to Snowhouse registry ==="
snow spcs image-registry login --connection "$CONN"

echo "=== 2/5  Build Docker image ==="
docker build --platform linux/amd64 -t ${IMAGE}:latest .

echo "=== 3/5  Tag and push ==="
docker tag ${IMAGE}:latest ${REGISTRY}/${IMAGE_REPO}/${IMAGE}:latest
docker push ${REGISTRY}/${IMAGE_REPO}/${IMAGE}:latest

echo "=== 4/5  Restart service ==="
snow sql -c "$CONN" -q "
  USE ROLE TECHNICAL_ACCOUNT_MANAGER;
  ALTER SERVICE TEMP.MMARZILLO_COCO.COCO_PRESENTATION_SERVICE SUSPEND;
  ALTER SERVICE TEMP.MMARZILLO_COCO.COCO_PRESENTATION_SERVICE RESUME;
"

echo "=== 5/5  Endpoint URL ==="
snow sql -c "$CONN" -q "USE ROLE TECHNICAL_ACCOUNT_MANAGER; SHOW ENDPOINTS IN SERVICE TEMP.MMARZILLO_COCO.COCO_PRESENTATION_SERVICE;"

echo "=== Done! ==="
