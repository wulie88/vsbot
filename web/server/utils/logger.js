const log4js = require('log4js'),
config = require('config')

const appName = config.get('appName');

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger(`[${appName.toUpperCase()}]`);

module.exports = logger;
