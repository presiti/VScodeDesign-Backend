const express = require("express");
const postRouter = require("./post/index");
const userRouter = require("./user"); //뒤에 /index 생략가능

const router = express.Router();

router.use("/post", postRouter);
router.use("/user", userRouter);

module.exports = router;
