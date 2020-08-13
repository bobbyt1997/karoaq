const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

//logging middleware
app.use(morgan('dev'))

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//api routes
app.use('/api', require('./api'))

//sends html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//500 internal server error
app.use((err, req, res, next) => {
  console.log(err)
  console.log(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})