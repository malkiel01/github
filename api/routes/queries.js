const express = require('express')
const router = express.Router()

const {
    getItems
} = require('../controllers/queries')

router.get('/', getItems)

module.exports = router