'use strict';
// Development specific configuration
// ==================================
const localDB = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'test',
  port: '27017',
  // charset: 'utf8',
}

const remoteDB = {
  host: '',
  user: '',
  password: '',
  database: '',
  port: '27017',
  // charset: 'utf8',
}

// module.exports = {
//   hostname: 'http://localhost:3000',
//   knex: {
//     client: 'mysql',
//     connection: localDB,
//     debug: true
//   },
// }

module.exports = {
  hostname: 'http://localhost:3000',
  connection: localDB
}