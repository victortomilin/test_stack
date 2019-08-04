const express = require('express')
const router = express.Router()

router.post('/', function (req, res, next) {
  const { key, value, ttl } = req.body
  const item = req.store.set(key).as(value)
  if (ttl) {
    item.ttl(ttl)
  }
  item.done()
  res.end()
})

router.get('/:key', function (req, res, next) {
  res.send(req.store.get(req.params.key))
})

router.delete('/:key', function (req, res, next) {
  req.store.remove(req.params.key)
  res.end()
})

module.exports = router
