/*
  node main.js
*/

const logger1 = require('./logger_01')
const logger2 = require('./logger_02')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')