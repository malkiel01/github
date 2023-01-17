module.exports = {
    getCategories: (req, res) => {
        res.status(200).json({
            message: 'Get All Categories'
        })
    },
    createCategories: (req, res) => {
        res.status(200).json({
            message: 'Create a new Categories'
        })
    },
    updateCategories: (req, res) => {
        const categoryId = req.params.categoryId
        
        res.status(200).json({
            message: `Update Categories - ${categoryId}`
        })
    },
    deleteCategories: (req, res) => {
        const categoryId = req.params.categoryId
        
        res.status(200).json({
            message: `Delete Categories - ${categoryId}`
        })
    }
}