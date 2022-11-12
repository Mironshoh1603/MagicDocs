const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");

const littleCategory = require("../models/littleCategory");

const getAllLittleCategory = catchErrorAsync(async (req, res, next) => {
   const data = await littleCategory
      .find()
      .populate({ path: "bigcategoryId", select: "name photo " }).populate("little");

   if (!data) {
      return next(new AppError("hozircha categoriyalar mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      data,
   });
});

const createLittleCategory = catchErrorAsync(async (req, res, next) => {
   const data = await littleCategory.create({
      name: req.body.name,
      bigcategoryId: req.body.bigcategoryId,
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

const deleteLittleCategory = catchErrorAsync(async (req, res, next) => {
   const data = await littleCategory.findByIdAndDelete(req.params.id);
   if (!data) {
      return next(new AppError("bunday idli category mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      message: "category o'chirildi",
   });
});

const UpdateLittleCategory = catchErrorAsync(async (req, res, next) => {
   const data = await littleCategory.findByIdAndUpdate(req.params.id, req.body);
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

module.exports = {
   getAllLittleCategory,
   createLittleCategory,
   deleteLittleCategory,
   UpdateLittleCategory,
};
