const express = require("express");

const router = express.Router();
const CommentController = require("../controller/comment");
const { Isauthentication, authoriseRoles } = require("../middleware/isAuthentication");

const upload = require("../middleware/upload");

router
   .route("/comment")
   .get(CommentController.getAllComment)
   .post(Isauthentication, authoriseRoles("ADMIN"), CommentController.createComment);

router
   .route("/comment/:id")
   .delete(Isauthentication, authoriseRoles("ADMIN"), CommentController.deleteComment)
   .patch(Isauthentication, authoriseRoles("ADMIN"), CommentController.updateComment);
module.exports = router;
