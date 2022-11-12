const mongoose = require("mongoose");

const commentSchmea = new mongoose.Schema({
   content: { type: String },
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
   contentId: { type: mongoose.Schema.Types.ObjectId, ref: "contents" },

   createdAt: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("comments", commentSchmea);
