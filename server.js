const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'dbLatihan';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error('Koneksi ke MongoDB gagal:', err);
    return;
  }

  console.log('Koneksi ke MongoDB sukses');

  const db = client.db(dbName);
});
const app = express();

app.listen(3000, function() {
  console.log('Server ExpressJS berjalan di http://localhost:3000');
});
app.get('/', function(req, res) {
    const collection = db.collection('users');
    collection.find().toArray(function(err, data) {
      if (err) {
        console.error('Gagal mengambil data dari MongoDB:', err);
        res.sendStatus(500);
        return;
      }
  
      res.json(data);
    });
  });
  