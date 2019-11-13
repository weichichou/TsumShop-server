const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {db} = require('./db')
const adRouter = require('./router/adRouter')

const app = express()
const corsMiddleware = cors()
app.use(corsMiddleware)
app.use(bodyParser.json())

db
    .sync()
    .then(()=>console.log('Database connected'))
    .catch(err=>console.error(err))

app.use(adRouter)

const port = 4000
app.listen(port, () => console.log(`Listen on port ${port}`))