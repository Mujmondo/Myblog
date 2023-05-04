const express = require('express')
const { createPost, getPosts } = require('../controllers/postsController')

const router = express.Router()


// create post router
router.get('/', getPosts)
router.post('/create', createPost)

// router.post('/edit', ()=>{})

module.exports = router