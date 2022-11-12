const mongoose = require("mongoose");

const LittleCategorySchema = new mongoose.Schema(
   {
      name: { type: String, required: true, trim: true },
      photo: {
         type: String,
      },
      createdAt: {
         type: Date,
         default: Date.now,
      },

      bigcategoryId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "bigcategories",
      },
   },
   {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
   },

   { timestamps: true }
);

LittleCategorySchema.virtual("little", {
   ref: "levels",
   foreignField: "littleId",
   localField: "_id",
});

module.exports = mongoose.model("littlecategories", LittleCategorySchema);
