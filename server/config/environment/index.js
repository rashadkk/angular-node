'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 8000,

  // JWT Secret
  secretOrKey: 'secretKey',
 
};

// Export the config object based on the NODE_ENV
// ==============================================
if(process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'PRODUCTION') {
  module.exports = _.merge(
  all,
  require('./production.js') || {});
} else {
  module.exports = _.merge(
  all,
  require('./development.js') || {});
}