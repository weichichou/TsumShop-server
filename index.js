const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {db} = require('./db')
const adRouter = require('./router/adRouter')

const app = express()
const corsMiddleware = cors()
const port = 4000

app
    .use(corsMiddleware)
    .use(bodyParser.json())
    .use(adRouter)
    .listen(port, () => console.log(`Listen on port ${port}`))

db
    .sync()
    .then(()=>console.log('Database connected'))
    .catch(err=>console.error(err))

