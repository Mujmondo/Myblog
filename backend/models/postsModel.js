const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    summary:{
        type: String
    },
    picture:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
}, {timestamps: true, })

module.exports = mongoose.model('post', postsSchema)