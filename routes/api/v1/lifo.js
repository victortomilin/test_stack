var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send(null)
})

router.post('/', function (req, res, next) {
  res.send(null)
})

module.exports = router
