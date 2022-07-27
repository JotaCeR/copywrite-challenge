const { expect } = require('chai')
const request = require('supertest')
const app = require('../src/app.js')

describe('Valid Requests', () => {
  it('should get 200', () => {
    request(app).get('/iecho?text=casa')
      .set('Accept', 'application/json')
      .expect(200)
  })

  it('should get a reverse text', () => {
    request(app).get('/iecho?text=calificacion')
      .set('Accept', 'application/json')
      .expect(function(res) {
        expect(res.body.text).to.equal('noicacifilac')
      })
    });

  it('should get a reverse text no matter the length', () => {
    request(app).get('/iecho?text=abcdefghijklmnopqrstuvwxyz')
      .set('Accept', 'application/json')
      .expect(function(res) {
        expect(res.body.text).to.equal('zyxwvutsrqponmlkjihgfedcba')
    })
  });

  it('should respond with json', () => {
    request(app).get('/iecho?text=auto')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
  })
})

describe('Palindrome Requests', () => {
  it('should get 200', () => {
    request(app).get('/iecho?text=neuquen')
      .set('Accept', 'application/json')
      .expect(200)
  })

  it('should get a "palindrome" flag set on true in the response', () => {
    request(app).get('/iecho?text=neuquen')
      .set('Accept', 'application/json')
      .expect(function(res) {
        expect(res.body.palindrome).to.equal(true)
  })
})

describe('Invalid Requests', () => {
  it('should get 400', () => {
    request(app).get('/iecho')
      .set('Accept', 'application/json')
      .expect(400)
  })
})
})