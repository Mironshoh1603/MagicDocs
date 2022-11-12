const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");

const LevelModel = require("../models/levelModel");

const getAllLevel = catchErrorAsync(async (req, res, next) => {
   const data = await LevelModel.find().populate("littleId");
   res.status(200).json({ success: true, data });
});

const createLevel = catchErrorAsync(async (req, res) => {
   console.log(req.body);
   const data = await LevelModel.create({
      name: req.body.name,
      littleId: req.body.littleId,
   });
   res.status(200).json({ success: true, data });
});

const deleteLevel = catchErrorAsync(async (req, res, next) => {
   const data = await LevelModel.findByIdAndDelete(req.params.id);

   if (!data) {
      return next(new AppError("bunday idli level mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      message: "level o'chirildi",
   });
});

const updateLevel = catchErrorAsync(async (req, res, next) => {
   const data = await LevelModel.findByIdAndUpdate(req.params.id, req.body);
   if (!data) {
      return next(new AppError("Update bo'lmadi", 404));
   }
   res.status(200).json({
      success: true,
      message: "level update",
   });
});

module.exports = { getAllLevel, createLevel, deleteLevel, updateLevel };
