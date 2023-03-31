const sequelize = require("../../models/index.js");

module.exports = {
  // GET /api/items
  // Get all items
  async getAllItems(req, res) {
    const items = await sequelize.Item.findAll({});
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
