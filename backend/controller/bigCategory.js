const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");

const bigCategoryModel = require("../models/bigCategory");

const getAllBigCategory = catchErrorAsync(async (req, res, next) => {
   const bigcategory = await bigCategoryModel
      .find()
      .populate({ path: "littlecategory", select: "name photo -bigcategoryId -_id" });

   if (!bigcategory) {
      return next(new AppError("hozircha categoriyalar mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      bigcategory,
   });
});

const createBigCategory = catchErrorAsync(async (req, res, next) => {
   const data = await bigCategoryModel.create({
      name: req.body.name,
   });
   if (req.file) {
      data.photo = req.file.path;
   }
   await data.save();
   res.status(200).json({
      success: true,
      data,
   });
});

const deleteBigCategory = catchErrorAsync(async (req, res, next) => {
   const data = await bigCategoryModel.findByIdAndDelete(req.params.id);
   if (!data) {
      return next(new AppError("bunday idli category mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      message: "category o'chirildi",
   });
});

const UpdateBigCategory = catchErrorAsync(async (req, res, next) => {
   const data = await bigCategoryModel.findByIdAndUpdate(req.params.id, req.body);
   if (req.file) {
      data.photo = req.file.filename;
   }
   if (!data) {
      return next(new AppError("category yangilanmadi", 404));
   }
   await data.save();

   res.status(200).json({
      success: true,
      data,
   });
});

module.exports = { getAllBigCategory, createBigCategory, deleteBigCategory, UpdateBigCategory };
