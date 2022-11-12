const CommentModel = require("../models/comment");
const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");

const getAllComment = catchErrorAsync(async (req, res, next) => {
   const data = await CommentModel.find()
      .populate({ path: "userId", select: "name -_id" })

      .populate({ path: "contentId", select: "name " });
   res.status(200).json({ success: true, data });
});

const createComment = catchErrorAsync(async (req, res, next) => {
   const data = await CommentModel.create({
      content: req.body.content,
      userId: req.user._id,
      contentId: req.body.contentId,
   });

   if (!data) {
      return next(new AppError("comment qo'shilmadi", 404));
   }

   res.status(200).json({
      success: true,
      data,
   });
});

const deleteComment = catchErrorAsync(async (req, res, next) => {
   const data = await CommentModel.findByIdAndDelete(req.params.id);
   if (!data) {
      return next(new AppError("bunday id mavjud emas", 404));
   }

   res.status(200).json({
      success: true,
      message: "comment o'chirildi",
   });
});

const updateComment = catchErrorAsync(async (req, res, next) => {
   const data = await CommentModel.findByIdAndUpdate(req.params.id, req.body);
   if (!data) {
      return next(new AppError("Update bo'lmadi", 404));
   }
   res.status(200).json({
      success: true,
      message: "comment update",
   });
});

module.exports = { getAllComment, updateComment, deleteComment, createComment };
