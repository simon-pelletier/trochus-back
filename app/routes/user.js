const userController = require('../controllers/user');
const express = require('express');
const router = express.Router();

// GET /api/users
// Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id
// Get one user
router.get('/:id', userController.getOneUser);

// POST /api/users
// Create a user
router.post('/', userController.createUser);

// PUT /api/users/:id
// Update a user
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id
// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;