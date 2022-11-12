const ContentMOdel = require("../models/contentModel");
const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");

const getAllContent = catchErrorAsync(async (req, res, next) => {
   const data = await ContentMOdel.find()
      .populate({ path: "userId", select: "name -_id" })
      .populate({ path: "levelId", select: "name  -_id" })
      .populate({ path: "littleId", select: "name " })
      .populate({ path: "bigId", select: "name " });
   res.status(200).json({ success: true, data });
});

const createContent = catchErrorAsync(async (req, res, next) => {
   const data = await ContentMOdel.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.user._id,
      levelId: req.body.levelId,
      littleId: req.body.littleId,
      bigId: req.body.bigId,
   });

   if (!data) {
      return next(new AppError("content qo'shilmadi", 404));
   }

   res.status(200).json({
      success: true,
      data,
   });
});

const deleteContent = catchErrorAsync(async (req, res, next) => {
   const data = await ContentMOdel.findByIdAndDelete(req.params.id);
   if (!data) {
      return next(new AppError("bunday id mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      message: "content o'chirildi",
   });
});

const updateContent = catchErrorAsync(async (req, res, next) => {
   const data = await ContentMOdel.findByIdAndUpdate(req.params.id, req.body);
   if (!data) {
      return next(new AppError("Update bo'lmadi", 404));
   }
   res.status(200).json({
      success: true,
      message: "level update",
   });
});

module.exports = { getAllContent, createContent, deleteContent, updateContent };
