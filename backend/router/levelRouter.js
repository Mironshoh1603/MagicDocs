const express = require("express");
const LevelController = require("../controller/levelController");
const router = express.Router();
const { Isauthentication, authoriseRoles } = require("../middleware/isAuthentication");

const upload = require("../middleware/upload");
router
   .route("/level")
   .get(LevelController.getAllLevel)
   .post(Isauthentication, authoriseRoles("ADMIN"), LevelController.createLevel);
router
   .route("/level/:id")
   .delete(Isauthentication, authoriseRoles("ADMIN"), LevelController.deleteLevel)
   .patch(Isauthentication, authoriseRoles("ADMIN"), LevelController.updateLevel);

module.exports = router;
