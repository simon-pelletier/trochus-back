const itemController = require('../controllers/item');
const express = require('express');
const router = express.Router();

// GET /api/items
// Get all items
router.get('/', itemController.getAllItems);

// GET /api/items/:id
// Get one item
router.get('/:id', itemController.getOneItem);

// POST /api/items
// Create an item
router.post('/', itemController.createItem);

// PUT /api/items/:id
// Update an item
router.put('/:id', itemController.updateItem);

// DELETE /api/items/:id
// Delete an item
router.delete('/:id', itemController.deleteItem);

module.exports = router;