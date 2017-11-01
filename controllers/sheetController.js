var mongoose = require('mongoose')
var Coral = require('coral')

mongoose.Promise = global.Promise

module.exports = (app) => {
  const config = {
    path: '/api/sheets',
    model: mongoose.model('Sheet')
  }
  // get api is public
  // config.method = ['GET', 'POST', 'PUT']
  app.use(new Coral(config))

  // update, delete is authenticated
  // config.middlewares = []
  // config.method = ['POST', 'PUT', 'DELETE']
  // app.use(new Coral(config))
}
