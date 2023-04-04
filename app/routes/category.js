const categoryController = require('../controllers/category');
const express = require('express');
const router = express.Router();

// GET /api/categories
// Get all categories
router.get('/', categoryController.getAllCategories);

module.exports = router;