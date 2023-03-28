const express = require("express");
const router = express.Router();

const sequelize = require('../models/index.js');

router.get("/", async (req, res) => {
  // res.send("Hello World!");
  const users = await sequelize.User.findAll({
    include: [ sequelize.Item ]
  });
  res.json(users);
});

// 404 Route
router.use('*', (req, res) => {
    res.status(404).json('error 404 - Not found');
})

module.exports = router;
