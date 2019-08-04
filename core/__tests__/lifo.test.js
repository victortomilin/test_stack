const lifo = require('../lifo')

describe('LIFO', () => {
  const instance = lifo()

  test('get the latest word added', () => {
    instance.add('Hello')
    instance.add('World')
    expect(instance.get()).toBe('World')
  })

  test('get the latest word added (second time)', () => {
    instance.add('Again')
    expect(instance.get()).toBe('Again')
  })

  test('get the first word added', () => {
    expect(instance.get()).toBe('Hello')
  })
})
