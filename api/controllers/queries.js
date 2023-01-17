
const database = require('../database/server')

const getItems = (req, res) => {
    const sqlCities = "SELECT * FROM `CITIES`;";
    database.db.query(sqlCities, (err, result) => {
        console.log(err);
        console.log(result);
        res.send(result)
    })
}

module.exports = {
    getItems,
    // createArticles: (req, res) => {
    //     res.status(200).json({
    //         message: 'Create a new Articles'
    //     })
    // },
    // updateArticles: (req, res) => {
    //     const articleId = req.params.articleId
        
    //     res.status(200).json({
    //         message: `Update Articles - ${articleId}`
    //     })
    // },
    // deleteArticles: (req, res) => {
    //     const articleId = req.params.articleId
        
    //     res.status(200).json({
    //         message: `Delete Articles - ${articleId}`
    //     })
    // }
}