const express = require("express");

const router = express.Router();
const ContentController = require("../controller/content");
const { Isauthentication, authoriseRoles } = require("../middleware/isAuthentication");

const upload = require("../middleware/upload");

router
   .route("/content")
   .get(ContentController.getAllContent)
   .post(Isauthentication, authoriseRoles("ADMIN"), ContentController.createContent);

router
   .route("/content/:id")
   .delete(Isauthentication, authoriseRoles("ADMIN"), ContentController.deleteContent)
   .patch(Isauthentication, authoriseRoles("ADMIN"), ContentController.updateContent);
module.exports = router;
