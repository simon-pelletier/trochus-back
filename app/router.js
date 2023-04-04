const express = require("express");
const router = express.Router();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/item');
const categoryRoutes = require('./routes/category');

// auth routes
router.use('/api/auth', authRoutes);

// items routes
router.use('/api/items', itemRoutes);

// categories routes
router.use('/api/categories', categoryRoutes);

// users routes
router.use('/api/users', userRoutes);

// 404 Route
router.use('*', (req, res) => {
    res.status(404).json('error 404 - Not found');
})

module.exports = router;
