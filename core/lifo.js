function lifo () {
  const stack = []

  const add = value => stack.push(value)
  const get = () => stack.pop()

  return Object.freeze({ add, get })
}

module.exports = lifo
