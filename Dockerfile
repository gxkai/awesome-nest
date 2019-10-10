FROM node:10.15.3

WORKDIR /app

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

COPY . /app

RUN cnpm i pm2 -g \
    && cnpm i \
    && npm run build

EXPOSE 4000

CMD ["npm", "prod"]
