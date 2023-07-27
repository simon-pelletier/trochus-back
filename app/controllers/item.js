const sequelize = require("../../models/index.js");

module.exports = {
  // GET /api/items
  // Get all items
  async getAllItems(req, res) {
    const items = await sequelize.Item.findAll({
      where: {
        published: true,
      },
      include: [sequelize.User, sequelize.Category],
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
      include: [sequelize.User, sequelize.Category],
    });
    res.json(items);
  },
  // GET /api/items/user/:id
  // Get all items by user
  async getAllItemsByUser(req, res) {
    console.log("req.params.id: ", req.params.id);
    const items = await sequelize.Item.findAll({
      where: {
        userId: req.params.id,
      },
      include: [sequelize.User, sequelize.Category],
    });
    res.json(items);
  },
  // GET /api/items/:id
  // Get one item
  async getOneItem(req, res) {
    const item = await sequelize.Item.findByPk(req.params.id, {
      include: [sequelize.User],
    });
    res.json(item);
  },
  // POST /api/items
  // Create an item
  async createItem(req, res) {
    const item = await sequelize.Item.create(req.body);
    const categories = req.body.categories;
    categories.forEach(async (category) => {
        const categoryToAdd = await sequelize.Category.findByPk(category.id);
        await item.addCategory(categoryToAdd);
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
