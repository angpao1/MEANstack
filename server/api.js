const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const mongo_string = "mongodb://localhost:27017/meanstack";

router.get('/show', function (req, res) {
  // res.end('Hi, show api');

  mongoClient.connect(mongo_string, function (req, db) {
    db.collection('course').find().toArray().then(course => {
      const output = {result : 'OK', message : course}
      res.json(output);
    })
    db.close();
  })
})

router.post('/add', function (req, res) {
  // res.end('Hi, add api: ' + req.body.name);
  mongoClient.connect(mongo_string, function (err, db) {
    const data = {name : req.body.name};

    db.collection('course')
    .insertOne(data, (err, result) => {
      if (err) throw err;
      const response = {result : 'OK', message : result.result.n + 'Inserted'};
      res.json(response);
    });
    db.close();

  });
})

router.delete('/delete/:name', function (req, res) {
  // res.end('Hi, delete api: ' + req.params.name);
  const query = {name : req.params.name};
  mongoClient.connect(mongo_string, function (err, db) {
    db.collection('course').deleteMany(query, function (err, result) {
      const response = {result : 'OK', message : result.result.n + 'Deleted'};
      res.json(response);
    })
  })
})

module.exports = router;