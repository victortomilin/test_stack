const repository = require('./repository')

function store () {
  const storage = repository()

  function set (key) {
    const item = { key }

    function as (value) {
      item.value = value
      return self
    }

    function ttl (time) {
      item.ttl = time
      item.expiresAt = getExpiresTime()

      function getExpiresTime () {
        const time = new Date()
        time.setSeconds(time.getSeconds() + item.ttl)
        return time
      }

      return self
    }

    function done () {
      storage.add(item)
    }

    const self = Object.freeze({ as, ttl, done })

    return self
  }

  function get (key) {
    return storage.getValueByKey(key)
  }

  function remove (key) {
    storage.removeItemByKey(key)
  }

  return Object.freeze({ set, get, remove })
}

module.exports = store
