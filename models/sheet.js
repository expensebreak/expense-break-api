const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const sheetSchema = new mongoose.Schema({
  name: String,
  category: String
})

exports = module.exports = mongoose.model('Sheet', sheetSchema)
