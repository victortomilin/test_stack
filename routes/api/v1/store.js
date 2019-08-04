var express = require('express')
var router = express.Router()

router.post('/', function (req, res, next) {
  res.send(null)
})

router.get('/:key', function (req, res, next) {
  res.send(null)
})

router.delete('/:key', function (req, res, next) {
  res.send(null)
})

module.exports = router
