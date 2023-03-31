const authController = require('../controllers/auth');
const express = require('express');
const router = express.Router();

// POST /api/auth
// Create a user to signup
router.post('/signup', authController.signup);

// POST /api/auth
// Post one user to signin
router.post('/signin', authController.signin);

module.exports = router;