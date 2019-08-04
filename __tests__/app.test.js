const request = require('supertest')
const app = require('../app')

describe('Test api', () => {
  describe('v1', () => {
    describe('lifo', () => {
      test('POST method', (done) => {
        request(app)
          .post('/api/v1/lifo')
          .type('json')
          .send({ word: 'foo' })
          .set('Accept', /application\/json/)
          .then(response => {
            expect(response.statusCode).toBe(200)
            done()
          })
      })

      test('GET method', (done) => {
        request(app)
          .get('/api/v1/lifo')
          .set('Accept', /application\/json/)
          .expect(200, { word: 'foo' }, done)
      })
    })

    describe('store', () => {
      describe('no TTL', () => {
        test('POST method', (done) => {
          request(app)
            .post('/api/v1/store')
            .type('json')
            .send([
              { key: 'name', value: 'John' }
            ])
            .set('Accept', /application\/json/)
            .then(response => {
              expect(response.statusCode).toBe(200)
              done()
            })
        })

        test('GET method', (done) => {
          request(app)
            .get('/api/v1/store/name')
            .set('Accept', /application\/json/)
            .expect(200, 'John', done)
        })

        test('DELETE method', (done) => {
          request(app)
            .delete('/api/v1/store/name')
            .set('Accept', /application\/json/)
            .expect(200, done)
        })
      })
    })
  })
})
