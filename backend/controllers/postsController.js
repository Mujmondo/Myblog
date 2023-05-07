const Posts = require('../models/postsModel')
const fs = require('fs')
const mongoose = require('mongoose')
const User = require('../models/userModel')
const Categories = require('../models/categoriesModel')


// get all the posts
const getPosts = async (req, res) => {
    const queryUsername = req.query.username
    const categoryName = req.query.category
    let posts
    try{
    if (queryUsername) {
        const user = await User.findOne({username: queryUsername}) 
        if(user){
        posts = await Posts.find({author: user._id}).populate('author', 'username')
        } else{
            res.status(400).json({ error: "Invalid username" })
        }
    } else if (categoryName) {
        const category = await Categories.findOne({name: categoryName})
        if(category){
            posts = await Posts.find({ category: category._id }).populate('category', 'name')
        }else{
            res.status(400).json({ error: "Invalid category name" })
        }
    } else {
        posts = await Posts.find({}).populate('author', ['username']).sort({ createdAt: -1 }).limit(20)
    }
    if (!posts) {
        res.status(404).json({ error: "No posts found" })
    }
    res.status(200).json(posts)

} catch(error){
    res.status(400).json({ error: error.message })
}
}

// get a post
const getPost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No post found" })
    }
    const post = await Posts.findById(id).populate('author', ['username'])
    if (!post) {
        return res.status(404).json({ error: "No post found" })
    }
    res.status(200).json(post)
}

// create a new post
const createPost = async (req, res) => {
    const { title, summary, content } = req.body
    const { originalname, path } = req.file
    const ext = originalname.split('.')[1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)
    if (!title) {
        throw Error('Title is required')
    }
    if (!content) {
        throw Error('Content is required')
    }
    if (!newPath) {
        throw Error('Picture is required')
    }


    try {
        const post = await Posts.create({
            title,
            summary,
            picture: newPath,
            content,
            author: req.user._id
        })
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { getPosts, getPost, createPost }