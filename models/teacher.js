const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  Name: String,
  E_mail: String,
  Department: String,
  Phone_Number: Number,
  Room_No: Number,
});

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;
