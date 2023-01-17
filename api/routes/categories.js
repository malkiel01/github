const express = require('express')
const router = express.Router()

const {
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories
} = require('../controllers/categories')

router.get('/', getCategories)

router.post('/', createCategories)

router.patch('/:categoryId', updateCategories)

router.delete('/:categoryId', deleteCategories)

module.exports = router