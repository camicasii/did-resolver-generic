const app = require('./app')

app.server = app.listen(8080, function () {
  console.log('Resolver app listening on port 8080...')
})