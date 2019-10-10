#!/usr/bin/env bash
npm run build
cp dist /home/app
cp package.json /home/app
cp api.sh /home/app
docker exec -it nginx_api /app/api.sh