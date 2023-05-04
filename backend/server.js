const express = require('express')
const { default: mongoose } = require('mongoose')

require('dotenv').config()

const userRoutes = require('./routes/user') 
const postsRoutes = require('./routes/posts')

const cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})

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
app.use('/api/posts', upload.single('file') , postsRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    // listening to requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db && listening to port %s', process.env.PORT)
    })
}) .catch((error) => {
    console.log(error)
})