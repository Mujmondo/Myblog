const Posts = require('../models/postsModel')
const jwt  = require('jsonwebtoken')
const fs = require('fs')


// get all the posts
const getPosts = async (req, res) => {
    const {token} = req.cookies
    jwt.verify(token, process.env.SECRET, {}, (err, info)=> {
        if(err) throw err
    })
    try{
    const posts = await Posts.find({}).populate('author', ['username']).sort({createdAt: -1}).limit(20)
    res.status(200).json(posts)
} catch(error){
    throw error
}
}
// create a new post
const createPost = async (req, res) => {
    const {title, summary, content} = req.body
    const {token} = req.cookies
    const {originalname, path} = req.file
    const ext = originalname.split('.')[1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)
    if(!title){
        throw Error ('Title is required')
    }
    if(!content){
        throw Error ('Content is required')
    }
    if(!newPath){
        throw Error ('Picture is required')
    }
    

    try{
        const info = jwt.verify(token, process.env.SECRET, {})
        if(!info){
            throw Error('Invalid token')
        }
        const post = await Posts.create({
            title,
            summary,
            picture: newPath,
            content,
            author: info._id
        })

        if(!post){
            throw Error('failed to')
        }
        
        res.status(200).json(post)
    
    } catch(error){
        throw error
    }
}


module.exports = {getPosts, createPost}