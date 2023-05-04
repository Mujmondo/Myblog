const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (username, _id) => {
    return jwt.sign({ username, _id }, process.env.SECRET, { expiresIn: '2d' })

}

// get a user
const getUser = (req, res) => {
    const {token} = req.cookies
    try{
    const info = jwt.verify(token, process.env.SECRET)
    res.status(200).json(info)
} catch(err){
    throw err
}
}


const signupUser = async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)
        res.status(200).json(user.username)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const loginUser = async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await User.login(username, password)
        const token = createToken(user.username, user._id)
        res.status(200).cookie('token', token).json({username, token})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// logoutUser
const logoutUser = (req, res) => {
    res.cookie('token', '')
    res.status(200).json('ok')
}


module.exports = { getUser, signupUser, loginUser, logoutUser }