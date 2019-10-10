FROM node:alpine

WORKDIR /app

COPY ./ /app

RUN npm i \
    && npm i -g pm2 \
    && npm run build

EXPOSE 4000

CMD ["npm", "prod"]
