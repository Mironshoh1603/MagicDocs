const mongoose = require("mongoose");

const DB = async (req, res) => {
   try {
      await mongoose.connect(process.env.URL);

      console.log("mongodb ulandi".green.bold.underline);
   } catch (error) {
      console.log("mongodb ulanmadi".red.bold.underline, error.message);
   }
};

module.exports = DB;
