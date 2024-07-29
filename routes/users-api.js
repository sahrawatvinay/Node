const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.get("/:id", (req, res) => {
  res.send(`Getting user with ${req.params.id}`);
});

module.exports = router;
