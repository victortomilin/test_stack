var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send({ word: req.lifo.get() })
})

router.post('/', function (req, res, next) {
  req.lifo.add(req.body.word)
  res.end()
})

module.exports = router
