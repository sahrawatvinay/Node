const express = require("express");
const userRouter = require("./users");
const postsRouter = require("./posts");

const router = express.Router();

router.use("/users", userRouter);
router.use("/posts", postsRouter);

module.exports = router;
