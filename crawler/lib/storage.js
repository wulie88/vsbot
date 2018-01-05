const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'vsbot';
let col = null;
// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
  // Create a collection we want to drop later
  col = client.db(dbName).collection('depth0');
  // Insert a bunch of documents
  // col.insert([{a:1, b:1}
  //   , {a:2, b:2}, {a:3, b:3}
  //   , {a:4, b:4}], {w:1}, function(err, result) {
  // });
});

exports.insert = function (row) {
  if (!col)
    return;

  new Promise(function(resolve, reject) {
    col.insert(row, function(err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}