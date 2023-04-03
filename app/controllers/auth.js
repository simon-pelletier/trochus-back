const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const sequelize = require("../../models/index.js");

module.exports = {
  // POST /api/auth/login
  // Post one user to login
  async login(req, res) {
    const user = await sequelize.User.findOne({
      where: {
        email: req.body.email,
      },
    });

    let accessToken = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: "foobar",
      },
      process.env.JWT_SECRET
    );

    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        user.password = undefined;
        res.json({userInfo: user, accessToken});
      } else {
        res.status(401).json("error 401 - Unauthorized");
      }
    });
  },
  // POST /api/auth/register
  // Create a user to register
  async register(req, res) {
    const userToRegister = { ...req.body };

    const userExist = await sequelize.User.findOne({
      where: {
        email: userToRegister.email,
      },
    });

    if (
      userToRegister.password !== userToRegister.passwordConfirm ||
      userExist
    ) {
      res.status(401).json("error 401 - Unauthorized");
    } else {
      delete userToRegister.passwordConfirm;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
          userToRegister.password = hash;
          userToRegister.roleId = 2; // user
          const user = await sequelize.User.create(userToRegister);
          res.json(user);
        });
      });
    }
  },
  // GET /api/auth/verifyemail
  // Verify email address to activate account
  async verifyEmail(req, res) {
    //! TODO : verify email
    console.log('res', res);
    console.log('req', req);
    res.json('ok');
  },
};
