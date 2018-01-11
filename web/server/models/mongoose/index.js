const mongoose = require('mongoose'),
config = require('config'),
logger = require('../../utils/logger')

const mongodbUrl = config.get('database.url');

function handleErr(err) {
  if (err) {
    logger.error('connect to %s error: ', mongodbUrl, err.message);
  }
}

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(mongodbUrl, {
    useMongoClient: true
  }, handleErr);
} else {
  mongoose.connect(mongodbUrl, {
    useMongoClient: true
  }, handleErr);
}

mongoose.Promise = global.Promise;

module.exports = mongoose;
