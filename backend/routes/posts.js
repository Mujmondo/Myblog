const express = require('express')
const { createPost, getPosts, getPost } = require('../controllers/postsController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// auth middleware
router.use(requireAuth)
// create post router
router.get('/', getPosts)

router.get('/:id', getPost)

router.post('/create', createPost)

// router.post('/edit', ()=>{})

module.exports = router