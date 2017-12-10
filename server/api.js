const express = require('express');
const router = express.Router();

router.get('/show', function(req, res) {
  res.end('Hi');
})

router.post('/add', function(req, res) {
  res.end('add api' + req.body.name);
})

router.delete('/delete/:name', function(req, res) {
  res.end('Hi, Delete api' + req.params.name);
})


module.exports = router;

