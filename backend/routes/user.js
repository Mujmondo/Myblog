const express = require('express')
const { signupUser, loginUser, getUser } = require('../controllers/userController')
const router = express.Router()

// routes
router.get('/', getUser)

router.post('/signup', signupUser)

router.post('/login', loginUser)

module.exports = router