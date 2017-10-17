const Express = require('express')
const app = Express()

app.get('/', function (req, res) {
  res.send('Hello Expense Break!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})