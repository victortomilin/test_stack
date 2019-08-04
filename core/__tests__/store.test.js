const store = require('../store')

describe('Store', () => {
  const instance = store()

  test('get the proper value by the key', () => {
    instance.set('name').as('John').done()
    expect(instance.get('name')).toBe('John')
  })

  test('get non existing key', () => {
    expect(instance.get('age')).toBe('')
  })

  test('get the proper value by the key (within TTL)', () => {
    instance.set('name').as('Larry').ttl(30).done()
    expect(instance.get('name')).toBe('Larry')
  })

  test('get the proper value by the key (over TTL)', () => {
    instance.set('name').as('Larry').ttl(30).done()

    const time = new Date()
    time.setSeconds(time.getSeconds() + 45)
    Date.now = jest.fn(() => time.getTime())

    expect(instance.get('name')).toBe('')
  })
})
