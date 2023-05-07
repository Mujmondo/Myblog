const Categories = require('../models/categoriesModel')


// get all categories
const getCategory = async (req, res) => {
    try{
        const category = await Categories.find({})
        res.status(200).json(category)
    } catch(error){
        res.status(400).json({error : error.message})
    }
}

// add a category
const addCategory = async (req, res) => {
    const { name } = req.body
    try{
        const category = await Categories.create({name})
        res.status(200).json(category)
    } catch(error){
        res.status(400).json({error : error.message})
    }
}

module.exports = {getCategory, addCategory}