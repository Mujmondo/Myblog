const Posts = require('../models/postsModel')
const fs = require('fs')


// get all the posts
const getPosts = async (req, res) => {
    try{
    const posts = await Posts.find({}).sort({createdAt: -1}).limit(20)
    res.status(200).json(posts)
    } catch(error){
        throw error
    }
}
// create a new post
const createPost = async (req, res) => {
    const {title, summary, content} = req.body
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
        const post = await Posts.create({
            title,
            summary,
            picture: newPath,
            content
        })
    
        res.status(200).json(post)
    } catch(error){
        throw error
    }
}


module.exports = {getPosts, createPost}