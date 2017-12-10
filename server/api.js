const express = require('express');
const router = express.Router();

router.get('/show', function (req, res) {
  res.end('Hi, show api');
})

router.post('/add', function (req, res) {
  res.end('Hi, add api: ' + req.body.name);
})

router.delete('/delete/:name', function (req, res) {
  res.end('Hi, delete api: ' + req.params.name);
})

module.exports = router;