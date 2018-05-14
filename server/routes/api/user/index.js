const router = require('express').Router();
const controller = require('./user.controller');

router.get('/',controller.index);

module.exports = router; 