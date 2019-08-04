const lifo = require('../core/lifo')

function lifoMiddleware () {
  const instance = lifo()

  return function (req, res, next) {
    req.lifo = instance
    next()
  }
}

module.exports = lifoMiddleware
