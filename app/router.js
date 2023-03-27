const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// 404 Route
router.use('*', (req, res) => {
    res.status(404).json('error 404 - Not found');
})

module.exports = router;
