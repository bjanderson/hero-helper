const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')

const routes = require('./routes')
const utilMiddleware = require('./routes/util-middleware')

const server = express()

server.use(morgan(':method :url :status - :response-time ms'))
server.use(bodyParser.json())

server.use('/api', utilMiddleware.setJsonHeaders, routes)

server.listen(3001, () => {
  console.log('Server is running at localhost:3001')
})
