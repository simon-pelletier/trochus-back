const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const emailValidator = require("email-validator");
const uuid = require("uuid");

const sequelize = require("../../models/index.js");

const sendEmail = require("../../utils/sendEmail.js");

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
        res.json({ userInfo: user, accessToken });
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
      if (!emailValidator.validate(userToRegister.email)) {
        res.status(401).json("error 401 - Unauthorized");
      }
      delete userToRegister.passwordConfirm;
      const confirmationToken = uuid.v4();
      userToRegister.confirmationToken = confirmationToken;

      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {
          userToRegister.password = hash;
          userToRegister.roleId = 2; // user
          const user = await sequelize.User.create(userToRegister);

          await sendEmail(
            userToRegister.email,
            "Activate account",
            `Please click the link to activate your Trochus account : ${process.env.CLIENT_URL}/confirm/${confirmationToken}`
          );

          res.json(user);
        });
      });
    }
  },
  // GET /api/auth/verifyemail
  // Verify email address to activate account
  async verifyEmail(req, res) {
    const verificationCode = req.params.verificationCode;
    const user = await sequelize.User.findOne({
      where: {
        confirmationToken: verificationCode,
      },
    });

    if (user) {
      user.confirmationToken = null;
      user.activated = 1;
      await user.save();

      res.json({
        action: "emailConfirmation",
        status: "success",
      });
    } else {
      res.json({
        action: "emailConfirmation",
        status: "error",
      });
    }
  },
};
