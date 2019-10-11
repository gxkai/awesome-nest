#!/usr/bin/env bash
cp . /home/app/api
docker exec -it nginx_api /app/api.sh