'use strict';
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const expressValidator = require('express-validator');
const auth = require('./auth/auth.service')();
const config = require('./config/environment');
const env = app.get('env');
const mongooseConf = require('./config/mongoose');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(auth.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser(config.secretOrKey));
app.use(express.static(path.join(__dirname, 'public')));

if ('production' === env) {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.static(path.join(__dirname, '../client')));
  app.set('appPath', path.join(__dirname, '../client'));
}

if ('development' === env || 'test' === env) {
  app.use(express.static(path.join(__dirname, '../public')));
  app.set('appPath', path.join(__dirname, '../public'));
}

app.get('/', function (req, res) {
  res.render('index.html');
})
require('./routes')(app);

// All other routes should redirect to the index.html
app.route('/*')
  .get(function (req, res) {
    res.sendFile(config.root + '/client/index.html');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
