const mongoose = require("mongoose");

const contentschema = new mongoose.Schema(
   {
      title: { type: String },
      content: { type: String },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      levelId: { type: mongoose.Schema.Types.ObjectId, ref: "levels" },
      littleId: { type: mongoose.Schema.Types.ObjectId, ref: "littlecategories" },
      bigId: { type: mongoose.Schema.Types.ObjectId, ref: "bigcategories" },
      avg: { type: Number },
      createdAt: {
         type: Date,
         default: Date.now,
      },
   },
   {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
   },
   { timestamps: true }
);

contentschema.virtual("salom", {
   ref: "ratings",
   foreignField: "contentId",
   localField: "_id",
});

module.exports = mongoose.model("contents", contentschema);
