const express = require("express");
const router = express.Router();
const routes = require("./routes");

router.use("/users", routes["users"]);
router.use("/posts", routes["posts"]);

module.exports = router;
