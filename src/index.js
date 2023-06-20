const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes/index.js')
const { auth } = require('express-openid-connect')
const config = require('./auth.js')
require('./database.js')

// Create server & server name
const server = express()
server.name = 'Silver Express'

// Middlewares

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })) // Process and
server.use(bodyParser.json({ limit: '50mb' })) // parser the request body
server.use(cookieParser()) // Parser cookies
server.use(morgan('dev')) // Generate registers
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
}) // Enables cors and allows access from specific domain

// Associate Auth0
server.use(auth(config))

// Associate routes
server.use('/', routes) 

// Error catching
server.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

// Exports server
module.exports = server