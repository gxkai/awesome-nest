FROM node:alpine

WORKDIR /app

COPY ./ /app
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm i \
    && cnpm i -g pm2 \
    && npm run build

EXPOSE 4000

CMD ["npm", "prod"]
