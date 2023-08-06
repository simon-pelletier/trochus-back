const itemController = require("../controllers/item");
const express = require("express");
const router = express.Router();

const upload = require("../middlewares/multer-config");

const verifyToken = require("../middlewares/verifyToken");

// GET /api/items
// Get all items
router.get("/", verifyToken, itemController.getAllItems);

// GET /api/items/published
// Get all published items
router.get("/published", verifyToken, itemController.getAllPublishedItems);

// GET /api/items/user/:id
// Get all items by user
router.get("/user/:id", verifyToken, itemController.getAllItemsByUser);

// GET /api/items/:id
// Get one item
router.get("/:id", itemController.getOneItem);

// POST /api/items
// Create an item
router.post("/", upload.array("images"), itemController.createItem);

// PUT /api/items/:id
// Update an item
router.put("/:id", itemController.updateItem);

// DELETE /api/items/:id
// Delete an item
router.delete("/:id", itemController.deleteItem);

module.exports = router;
