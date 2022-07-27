const { expect } = require('chai')
const request = require('supertest')
const app = require('../src/app.js')

describe('Valid Requests', () => {
  it('should get 200', async () => {
    const response = await request(app).get('/iecho?text=casa').set('Accept', 'application/json')
      expect(response.status).to.equal(200);
  })

  it('should get a reverse text', async () => {
    const response = await request(app).get('/iecho?text=calificacion').set('Accept', 'application/json')
      expect(response.body.text).to.equal('noicacifilac')
    });

  it('should get a reverse text no matter the length', async () => {
    const response = await request(app).get('/iecho?text=abcdefghijklmnopqrstuvwxyz').set('Accept', 'application/json')
    
      expect(response.body.text).to.equal('zyxwvutsrqponmlkjihgfedcba')
  });

  it('should respond with json', async () => {
    const response = await request(app).get('/iecho?text=auto').set('Accept', 'application/json')
      expect(response.headers['content-type'], /json/);
  })
})

describe('Palindrome Requests', () => {
  it('should get 200', async () => {
    const response = await request(app).get('/iecho?text=neuquen').set('Accept', 'application/json')
      expect(response.status).to.equal(200)
  })

  it('should get a "palindrome" flag set on true in the response', async () => {
    const response = await request(app).get('/iecho?text=neuquen').set('Accept', 'application/json')
      expect(response.body.palindrome).to.equal(true)
})

describe('Invalid Requests', () => {
  it('should get 400', async () => {
    const response = await request(app).get('/iecho').set('Accept', 'application/json')
      expect(response.status).to.equal(400)
  })

  it('should get error text', async () => {
    const response = await request(app).get('/iecho').set('Accept', 'application/json')
      expect(response.body.error).to.equal('no text')
  })
})
})