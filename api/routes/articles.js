const express = require('express')
const router = express.Router()

const {
    getArticles,
    createArticles,
    updateArticles,
    deleteArticles
} = require('../controllers/articles')

router.get('/', getArticles)

router.post('/', createArticles)

router.patch('/:articleId', updateArticles)

router.delete('/:articleId', deleteArticles)

module.exports = router