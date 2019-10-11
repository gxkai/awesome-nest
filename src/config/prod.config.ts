import { resolve } from 'path'

export default {
  port: 4000,
  hostName: '0.0.0.0',

  orm: {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'test',
    entities: [resolve('./**/*.entity.js')],
    migrations: ['migration/*.ts'],
    dropSchema: false,
    synchronize: false,
    logging: false,
  },
}
