const express = require("express");
const ratingController = require("../controller/ratingController");
const router = express.Router();
const { Isauthentication, authoriseRoles } = require("../middleware/isAuthentication");

const upload = require("../middleware/upload");
router.route("/rating").post(Isauthentication, ratingController.createRatings);
module.exports = router;
