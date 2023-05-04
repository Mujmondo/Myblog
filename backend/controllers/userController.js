const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (username, _id) => {
    return jwt.sign({ username, _id }, process.env.SECRET, { expiresIn: '2d' })

}

const signupUser = async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)

        const token = createToken(username, user._id)
        res.status(200).json({ username, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const loginUser = async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await User.login(username, password)
        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


module.exports = { signupUser, loginUser }