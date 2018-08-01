'use strict';
// Development specific configuration
// ==================================
const localDB = {
  host: 'localhost',
  user: '',
  password: '',
  port: '27017',
  database: '',
  // charset: 'utf8',
}

const remoteDB = {
  host: '',
  user: '',
  password: '',
  port: '27017',
  database: '',
  // charset: 'utf8',
}


// module.exports = {
//   hostname: 'http://',
//   knex: {
//     client: 'mysql',
//     connection: remoteDB,//localDB,
//     debug: true
//   },
// }

module.exports = {
  hostname: 'http://',
  connection: remoteDB
}