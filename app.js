const express = require('express')
const AV = require('leanengine')

const app = express()

// view engine setup
app.use(AV.express())
app.use(express.static('./dist/'))

app.enable('trust proxy')

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
