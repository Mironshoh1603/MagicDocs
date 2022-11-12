const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Iltimos ismingizni kiriting"],
      maxLength: [30, "Ism maximal 30 belgidan iborat bo`lish kerak"],
      minLength: [4, "Ism minimal 4 belgidan iborat bo`lishi kerak"],
      trim: true,
   },
   email: {
      type: String,
      required: [true, "Iltimos email kiriting"],
      unique: true,
      validate: [validator.isEmail, "Iltimos to`g`ri email kiriting"],
   },
   password: {
      type: String,
      required: [true, "Iltimos Parol kiriting"],
      minLength: [5, "parolni minimal uzunligi 5 ta belgidan iborat"],
   },
   photo: {
      type: String,
   },
   role: {
      type: String,
      enum: ["USER", "ADMIN", "EXPERT"],
      default: "USER",
   },
   resetPasswordToken: String,
   resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) {
      next();
   }
   this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getResetPasswordToken = function () {
   const resetToken = crypto.randomBytes(20).toString("hex");

   this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
   return resetToken;
};
module.exports = mongoose.model("users", userSchema);
