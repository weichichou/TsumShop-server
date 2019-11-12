const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')

const app = express()
const corsMiddleware = cors()
app.use(corsMiddleware)
app.use(bodyParser.json())

const port = 4000
app.listen(port, () => console.log(`Listen on port ${port}`))