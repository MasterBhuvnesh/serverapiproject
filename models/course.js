const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  Subject: String,
  code: String,
  faculty: String,
  credits: Number,
});

const CourseModel = mongoose.model("course", CourseSchema);

module.exports = CourseModel;
