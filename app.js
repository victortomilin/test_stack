const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const lifoMiddleware = require('./middlewares/lifo')
const storeMiddleware = require('./middlewares/store')

const indexRouter = require('./routes/index')
const lifoRouter = require('./routes/api/v1/lifo')
const storeRouter = require('./routes/api/v1/store')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/v1/lifo', lifoMiddleware(), lifoRouter)
app.use('/api/v1/store', storeMiddleware(), storeRouter)

module.exports = app
