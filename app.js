const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const lifoMiddleware = require('./middlewares/lifo')

const indexRouter = require('./routes/index')
const lifoRouter = require('./routes/api/v1/lifo')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/v1/lifo', lifoMiddleware(), lifoRouter)

module.exports = app
