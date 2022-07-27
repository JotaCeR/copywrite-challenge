const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index')

const server = express()

server.name = 'API'

server.use(morgan('dev'))
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Acess-Control-Allow-Methods', 'GET')
  next()
})

server.use('/', routes)

server.use((err, res, req, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

module.exports = server