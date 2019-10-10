FROM node:10.15.3

WORKDIR /app

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

COPY ./ /app

RUN cnpm i \
    && npm i -g pm2 \
    && npm run build

EXPOSE 4000

CMD ["npm", "prod"]
