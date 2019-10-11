#!/usr/bin/env bash
cp . nginx_api:/app
docker exec -it nginx_api /app/api.sh