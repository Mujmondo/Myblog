const express = require('express')
const { default: mongoose } = require('mongoose')

require('dotenv').config()

const userRoutes = require('./routes/user') 
const postsRoutes = require('./routes/posts')
const categoriesRoutes = require('./routes/categories')

const cors = require('cors')
const multer = require('multer')
const cookieParser = require('cookie-parser')
const upload = multer({ dest: 'uploads/'})

const app = express()

// middlewares
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'))

app.get('*', (req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/posts', upload.single('file') , postsRoutes)
app.use('/api/categories', categoriesRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    // listening to requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db && listening to port %s', process.env.PORT)
    })
}) .catch((error) => {
    console.log(error)
})