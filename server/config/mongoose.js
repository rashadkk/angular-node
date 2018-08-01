const mongoose = require('mongoose');
const config = require('./environment');

const uri = `mongodb://${config.connection.host}:${config.connection.port}/${config.connection.database}`
// const uri = `mongodb://${config.connection.user}:${config.connection.password}@${config.connection.host}:${config.connection.port}/${config.connection.database}`

mongoose.connect(uri,{ useNewUrlParser: true })
.then( () => {
  console.log('connected to db')
})
.catch( error => {
  console.log('Error === ',error)
})
let db = mongoose.connection;