const express = require("express");
const errorController = require("../controller/errorController");
const app = express();
const cookie = require("cookie-parser");
const bodyParser = require("body-parser");
const userRouter = require("../router/user");
const expressupload = require("express-fileupload");
const cors = require("cors");

const bigCategoryRouter = require("../router/bigcategory");
const littlecategory = require("../router/littleRouter");
const contentRouter = require("../router/content");
const commentRouter = require("../router/comment");
const ratingRouter = require("../router/rating");

const levelRouter = require("../router/levelRouter");
app.use(express.json());
app.use(expressupload());
// app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1", bigCategoryRouter);
app.use("/api/v1", levelRouter);
app.use("/api/v1", littlecategory);
app.use("/api/v1", contentRouter);
app.use("/api/v1", commentRouter);
app.use("/api/v1", ratingRouter);

app.use(errorController);

module.exports = app;
