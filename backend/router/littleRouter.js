const express = require("express");
const router = express.Router();
const LittlecategoryController = require("../controller/litteleCategory");
const { Isauthentication, authoriseRoles } = require("../middleware/isAuthentication");

const upload = require("../middleware/upload");

router
   .route("/littlecategory")
   .get(LittlecategoryController.getAllLittleCategory)
   .post(
      upload.single("photo"),
      Isauthentication,
      authoriseRoles("ADMIN"),
      LittlecategoryController.createLittleCategory
   );
router
   .route("/littlecategory/:id")
   .delete(Isauthentication, authoriseRoles("ADMIN"), LittlecategoryController.deleteLittleCategory)
   .patch(
      upload.single("photo"),
      Isauthentication,
      authoriseRoles("ADMIN"),
      LittlecategoryController.UpdateLittleCategory
   );

module.exports = router;
