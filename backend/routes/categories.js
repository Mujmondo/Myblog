const { getCategory, addCategory } = require('../controllers/categoriesController')

const router = require('express').Router()

router.get('/', getCategory)
router.post('/', addCategory)


module.exports = router