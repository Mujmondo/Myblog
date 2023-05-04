const Posts = require('../models/postsModel')
const fs = require('fs')


// get all the posts
const getPosts = async (req, res) => {
    const posts = await Posts.find({})
    res.status(200).json(posts)
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
    const post = await Posts.create({
        title,
        summary,
        picture: newPath,
        content
    })

    res.status(200).json(post)
}


module.exports = {getPosts, createPost}