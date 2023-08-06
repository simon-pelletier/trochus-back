const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.status(401).json("error 401 - Unauthorized");
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json("error 401 - Unauthorized");
      return;
    }
    next();
  });
};

module.exports = verifyToken;
