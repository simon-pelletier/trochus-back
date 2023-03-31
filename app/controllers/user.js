const sequelize = require('../../models/index.js');

module.exports = {
    // GET /api/users
    // Get all users
    async getAllUsers(req, res) {
        const users = await sequelize.User.findAll({
            include: [ sequelize.Item ]
        });
        res.json(users);
    },
    // GET /api/users/:id
    // Get one user
    async getOneUser(req, res) {
        const user = await sequelize.User.findByPk(req.params.id, {
            include: [ sequelize.Item ]
        });
        res.json(user);
    },
    // POST /api/users
    // Create a user
    async createUser(req, res) {
        const user = await sequelize.User.create(req.body);
        res.json(user);
    },
    // PUT /api/users/:id
    // Update a user
    async updateUser(req, res) {
        const user = await sequelize.User.findByPk(req.params.id);
        await user.update(req.body);
        res.json(user);
    },
    // DELETE /api/users/:id
    // Delete a user
    async deleteUser(req, res) {
        const user = await sequelize.User.findByPk(req.params.id);
        await user.destroy();
        res.json(user);
    },
};
