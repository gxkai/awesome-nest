#!/usr/bin/env bash
cp -r . /var/jenkins_home/app
docker exec -it nginx_api /app/api.sh