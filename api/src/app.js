const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/index')
const cors = require('cors')
const server = express()

server.name = 'API'

server.use(morgan('dev'))
server.use(express.json({limit: '50mb'}))
server.use(express.urlencoded({limit: '50mb', extended: false}))
server.use(cors())

server.use('/', routes)

server.use((err, res, req, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

module.exports = server