const express = require('express')
const app = express()

// Imported
const articlesRouter = require('./api/routes/articles')
const categoriesRouter = require('./api/routes/categories')
const usersRouter = require('./api/routes/users')
const itemsRouter = require('./api/routes/queries')

// Express
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requestet-With, Content-Type, Accept, Authorization")
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
        
    }
    next()
})

// Router
app.use('/items', itemsRouter)
app.use('/articles', articlesRouter)
app.use('/categories', categoriesRouter)
app.use('/users', usersRouter)


// Router Error
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message : error.message
        }
    })
})

module.exports = app