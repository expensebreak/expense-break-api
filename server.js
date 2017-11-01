const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compress = require('compression')
const logger = require('morgan')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const config = require('./config')

// connect to mongo-db

mongoose.Promise = global.Promise

mongoose.connect(config.MONGO_URI)

// Bootstrap mongoose models
fs.readdirSync('./models').forEach((file) => {
  require('./models/' + file)
})

// initialize app
const app = express()

// config app
app.use(logger('dev'))
app.use(compress())
app.use(cors())
app.use(bodyParser.json())

// Load all controllers
fs.readdir('./controllers', (err, files) => {
  if (err) {
    throw Error('Unable to load controller')
  }
  files.forEach((fileName) => {
    require(path.join(__dirname, '/controllers/', fileName))(app)
  })
})

// TODO: remove later
// app.get('/', (req, res) => {
//   res.json({
//     version: 'v1'
//   })
// })

// listen express server on port mention
app.listen(process.env.PORT || 3001, function () {
  console.log('Express server listening on port ' + (process.env.PORT || 3001))
})
