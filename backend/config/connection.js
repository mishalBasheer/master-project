require("dotenv").config();
const mongoose = require("mongoose");

const DBL = process.env.DATABASE_LOCAL;
mongoose.set("strictQuery", false);
const db = mongoose.connect(DBL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
