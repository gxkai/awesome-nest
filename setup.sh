#!/usr/bin/env bash
cp -r . /var/jenkins_home/app
echo '111'
docker exec -it nginx_api /app/api.sh