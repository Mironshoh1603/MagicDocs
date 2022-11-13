const dotenv = require("dotenv");
dotenv.config({});
const colors = require("colors");
const DB = require("./connect/DB");
DB();

const app = require("./middleware/app");

PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server ishladi  ${process.env.PORT}`.yellow.bold.underline));
