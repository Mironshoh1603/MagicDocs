const express = require("express");
const router = express.Router();
const bigcategoryController = require("../controller/bigCategory");
const { Isauthentication, authoriseRoles } = require("../middleware/isAuthentication");

const upload = require("../middleware/upload");

router
   .route("/category")
   .get(bigcategoryController.getAllBigCategory)
   .post(
      Isauthentication,
      authoriseRoles("ADMIN"),
      upload.single("photo"),
      bigcategoryController.createBigCategory
   );

router
   .route("/category/:id")
   .delete(Isauthentication, authoriseRoles("ADMIN"), bigcategoryController.deleteBigCategory)
   .patch(
      Isauthentication,
      authoriseRoles("ADMIN"),
      upload.single("photo"),
      bigcategoryController.UpdateBigCategory
   );

module.exports = router;
