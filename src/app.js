const Express = require('express')
const cors = require('cors')
const app = Express()

app.get('/', function (req, res) {
  res.send('Hello Expense Break!')
})

app.get('/sheets', cors(), function (req, res) {
  res.json([
    {
      name: 'Personal Expenses',
      categary: 'daily'
    },
    {
      name: 'Goa Trip Expenses',
      categary: 'one-time'
    },
    {
      name: 'Roomate Expense',
      categary: 'monthly'
    }
  ])
})

module.exports = app
