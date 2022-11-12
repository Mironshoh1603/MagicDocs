const mongoose = require("mongoose");

const BigCategorySchema = new mongoose.Schema(
   {
      name: { type: String, required: true, trim: true },
      photo: {
         type: String,
      },
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

BigCategorySchema.virtual("littlecategory", {
   ref: "littlecategories",
   foreignField: "bigcategoryId",
   localField: "_id",
});

module.exports = mongoose.model("bigcategories", BigCategorySchema);
