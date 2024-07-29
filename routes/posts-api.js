const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Posts default");
});

router.get("/new", (req, res) => {
  res.send("New Posts form");
});

module.exports = router;
