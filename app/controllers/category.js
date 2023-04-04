const sequelize = require("../../models/index.js");

module.exports = {
    // GET /api/categories
    // Get all categories
    async getAllCategories(req, res) {
        const categories = await sequelize.Category.findAll();
        res.json(categories);
    },
};