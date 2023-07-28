const sequelize = require("../../models/index.js");

const crypto = require("crypto");

module.exports = {
  // GET /api/items
  // Get all items
  async getAllItems(req, res) {
    const items = await sequelize.Item.findAll({
      where: {
        published: true,
      },
      include: [sequelize.User, sequelize.Category, sequelize.Image],
    });
    res.json(items);
  },
  // GET /api/items/published
  // Get all published items
  async getAllPublishedItems(req, res) {
    const items = await sequelize.Item.findAll({
      where: {
        published: true,
        traded: false,
      },
      include: [sequelize.User, sequelize.Category, sequelize.Image],
    });
    res.json(items);
  },
  // GET /api/items/user/:id
  // Get all items by user
  async getAllItemsByUser(req, res) {
    const items = await sequelize.Item.findAll({
      where: {
        userId: req.params.id,
      },
      include: [sequelize.User, sequelize.Category, sequelize.Image],
    });
    res.json(items);
  },
  // GET /api/items/:id
  // Get one item
  async getOneItem(req, res) {
    const item = await sequelize.Item.findByPk(req.params.id, {
      include: [sequelize.User, sequelize.Category, sequelize.Image],
    });
    res.json(item);
  },
  // POST /api/items
  // Create an item
  async createItem(req, res) {
    const item = await sequelize.Item.create(req.body);
    const categoriesIds = req.body.categories;
    if (categoriesIds && categoriesIds.length > 0) {
      categoriesIds.forEach(async (categoryId) => {
          const categoryToAdd = await sequelize.Category.findByPk(categoryId);
          await item.addCategory(categoryToAdd);
      });
    }

    req.files.forEach(async (image) => {
      await sequelize.Image.create({
        itemId: item.id,
        filename: image.filename,
        fileType: image.mimetype,
        fileSize: image.size,
      });
    });

    res.json(item);
  },
  // PUT /api/items/:id
  // Update an item
  async updateItem(req, res) {
    const item = await sequelize.Item.findByPk(req.params.id);
    await item.update(req.body);
    res.json(item);
  },
  // DELETE /api/items/:id
  // Delete an item
  async deleteItem(req, res) {
    const item = await sequelize.Item.findByPk(req.params.id);
    await item.destroy();
    res.json(item);
  },
};
