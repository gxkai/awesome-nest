#!/usr/bin/env bash
image_version=`date +%Y%m%d%H%M`;
# 构建nest/test:$image_version镜像
docker build -t nest/test:$image_version .;
# 查看镜像列表
docker images;
# 关闭nest_test容器
docker stop nest_test || true;
# 删除nest_test容器
docker rm nest_test || true;
# 基于nest/test 镜像 构建一个容器 nest_test
docker run -v -p 4000:4000 -d --name nest_test nest/test:$image_version;
# 查看日志
docker logs nest_test;
#删除build过程中产生的镜像    #docker image prune -a -f
docker rmi $(docker images -f "dangling=true" -q);
# 删除nest/test镜像
docker rmi --force $(docker images | grep nest/test | awk '{print $3}');
# 对空间进行自动清理
docker system prune -a -f;
