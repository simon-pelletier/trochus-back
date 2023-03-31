const bcrypt = require("bcrypt");
const saltRounds = 10;

const sequelize = require("../../models/index.js");

module.exports = {
  // POST /api/auth/signin
  // Post one user to signin
  async signin(req, res) {
    const user = await sequelize.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
            res.json(user);
        } else {
            res.status(401).json("error 401 - Unauthorized");
        }
    });
  },
  // POST /api/auth/signup
  // Create a user to signup
  async signup(req, res) {
    const userToRegister = { ...req.body };

    if (userToRegister.password !== userToRegister.passwordConfirm) {
      res.status(401).json("error 401 - Unauthorized");
    } else {
      delete userToRegister.passwordConfirm;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
          userToRegister.password = hash;
          const user = await sequelize.User.create(userToRegister);
          res.json(user);
        });
      });
    }
  },
};
