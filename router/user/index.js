const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is User");
});

module.exports = router;
