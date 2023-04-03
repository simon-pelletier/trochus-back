const authController = require('../controllers/auth');
const express = require('express');
const router = express.Router();

// POST /api/auth
// Create a user to register
router.post('/register', authController.register);

// POST /api/auth
// Post one user to login
router.post('/login', authController.login);

// GET /api/auth
// Email verification
router.get('/verify/verificationCode', authController.verifyEmail);

module.exports = router;