const express = require('express')
const { signupUser, loginUser, getUser, logoutUser } = require('../controllers/userController')
const router = express.Router()

// routes
router.get('/', getUser)

router.post('/signup', signupUser)

router.post('/login', loginUser)

router.post('/logout', logoutUser)

module.exports = router