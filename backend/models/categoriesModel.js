const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const categoriesSchema = new Schema({
    name: {
        type: String,
        default: ''
    }
}, {timestamps: true})


module.exports = mongoose.model('category', categoriesSchema) 