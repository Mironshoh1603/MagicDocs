const mongoose = require("mongoose");

const contentschema = new mongoose.Schema({
   title: { type: String },
   content: { type: String },
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
   levelId: { type: mongoose.Schema.Types.ObjectId, ref: "levels" },
   littleId: { type: mongoose.Schema.Types.ObjectId, ref: "littlecategories" },
   bigId: { type: mongoose.Schema.Types.ObjectId, ref: "bigcategories" },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("contents", contentschema);
