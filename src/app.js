const Express = require('express')
const cors = require('cors')
const app = Express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Sheet = require('../models/sheet')

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/expensebreak')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))

app.get('/', function (req, res) {
  res.send('Hello Expense Break!')
})

app.get('/sheets', cors(), function (req, res) {
  Sheet.find({}, (err, sheets) => {
    if (err) return res.json(err)
    res.json(sheets)
  })

})

app.post('/sheets', cors(), function (req, res) {
  var sheet = new Sheet({
    name: req.body.name,
    category: req.body.category
  })

  sheet.save((err) => {
    if (err) return res.json(err)
    res.json(sheet)
  })
})

app.put('/sheets/:id', cors(), function (req, res) {

  var updateSheetObject = {}

  if (req.body.name && req.body.category) {
    updateSheetObject = { 'name': req.body.name, 'category': req.body.category }
  }
  else if (req.body.name) {
    updateSheetObject = { 'name': req.body.name }
  }
  else if (req.body.category) {
    updateSheetObject = { 'category': req.body.category }
  }

  Sheet.findByIdAndUpdate(req.params.id, updateSheetObject, (err, sheet) => {
    if (err) return res.json(err)
    res.json(sheet);
  })
})

app.delete('/sheets/:id', cors(), function (req, res) {

  Sheet.findByIdAndRemove(req.params.id, (err, post) => {
    if (err) return res.json(err)
    res.json(post)
  })

})
module.exports = app
