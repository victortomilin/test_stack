function repository () {
  const storage = []

  function findItemByKey (key) {
    return storage.findIndex(item => item.key === key)
  }

  function add (item) {
    const itemIndex = findItemByKey(item.key)
    const isItemAlreadyExist = itemIndex >= 0
    if (isItemAlreadyExist) {
      storage.splice(itemIndex, 1, item)
      return
    }
    storage.push(item)
  }

  function removeItemByKey (key) {
    const itemIndex = findItemByKey(key)
    if (itemIndex >= 0) {
      storage.splice(itemIndex, 1)
    }
  }

  function getValueByKey (key) {
    const element = storage.find(item => item.key === key)

    function getValue () {
      const hasTTL = Object.prototype.hasOwnProperty.call(element, 'ttl')
      const isItemExpired = hasTTL && Date.now() > element.expiresAt.getTime()

      if (isItemExpired) {
        removeItemByKey(element.key)
        return ''
      }

      return element.value
    }

    if (element) {
      return getValue()
    }

    return ''
  }

  return Object.freeze({ add, getValueByKey, removeItemByKey })
}

module.exports = repository
