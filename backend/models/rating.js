const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
   rating: { type: Number },
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
   contentId: { type: mongoose.Schema.Types.ObjectId, ref: "contents" },

   createdAt: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("ratings", ratingSchema);
