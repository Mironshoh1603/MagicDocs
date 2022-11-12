const catchErrorAsync = require("../utils/catchUtil");
const AppError = require("../utils/appError");

const ratingModel = require("../models/rating");

const createRatings = catchErrorAsync(async (req, res, next) => {
   const data = await ratingModel.create({
      rating: req.body.rating,
      userId: req.user._id,
      contentId: req.body.contentId,
   });
   if (!data) {
      return next(new AppError("rating berish amalga oshmadi", 404));
   }
   res.status(200).json({
      success: true,
      data,
   });
});

module.exports = { createRatings };
