#!/usr/bin/env bash
cp -r . nginx_api:/app
docker exec -it nginx_api /app/api.sh