'use strict';
// Development specific configuration
// ==================================
const localDB = {
  host: 'localhost',
  user: 'root',
  password: 'bititude',
  database: '',
  charset: 'utf8',
}

const remoteDB = {
  host: '',
  user: '',
  password: '',
  database: '',
  charset: 'utf8',
}

module.exports = {
  hostname: 'http://localhost:3000',
  knex: {
    client: 'mysql',
    connection: localDB,
    debug: true
  },
}