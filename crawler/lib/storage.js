const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'vsbot';
let dbClient = null;
let dbCollections = {};
// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
  dbClient = client
  console.log('connected:', url)
});

exports.insert = function (collection, row) {
  if (!dbClient)
    return;

  let col = dbCollections[collection];
  if (!col) {
    col = dbCollections[collection] = dbClient.db(dbName).collection(collection);
  }

  new Promise(function(resolve, reject) {
    col.insert(row, function(err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  }).catch(() => {})
}