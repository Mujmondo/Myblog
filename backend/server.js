const express = require('express')
const { default: mongoose } = require('mongoose')

require('dotenv').config()

const userRoutes = require('./routes/user') 

const cors = require('cors')

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

app.get('/', (req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/posts', ()=>{})

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    // listening to requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db && listening to port %s', process.env.PORT)
    })
}) .catch((error) => {
    console.log(error)
})