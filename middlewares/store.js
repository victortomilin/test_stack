const store = require('../core/store')

function storeMiddleware () {
  const instance = store()

  return function (req, res, next) {
    req.store = instance
    next()
  }
}

module.exports = storeMiddleware
