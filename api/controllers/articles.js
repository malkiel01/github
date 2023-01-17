

module.exports = {
    getArticles: (req, res) => {
        res.status(200).json({
            message: 'Get All Articles'
        })
    },
    createArticles: (req, res) => {
        res.status(200).json({
            message: 'Create a new Articles'
        })
    },
    updateArticles: (req, res) => {
        const articleId = req.params.articleId
        
        res.status(200).json({
            message: `Update Articles - ${articleId}`
        })
    },
    deleteArticles: (req, res) => {
        const articleId = req.params.articleId
        
        res.status(200).json({
            message: `Delete Articles - ${articleId}`
        })
    }
}