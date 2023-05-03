const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema =  new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.statics.signup = async function(username, password){
    // validation
    if(!username || !password){
        throw Error('All fields are required')
    }

    const exists = await this.findOne({username})
    
    if(exists){
        throw Error('Username is already exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({username, password: hash})
    return user
}

userSchema.statics.login = async function(username, password){
    // validation
    if(!username || !password){
        throw Error('All fields are required')
    }

    const user = await this.findOne({username})

    if(!user){
        throw Error('Incorrect username')
    }

    const match = await bcrypt.compare(password, user.password)
    
    if(!match){
        throw Error('Incorrect password')
    }

    return user
}


module.exports = mongoose.model('user', userSchema)