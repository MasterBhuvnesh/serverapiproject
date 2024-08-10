const mongoose = require("mongoose");

const ClassmateSchema = new mongoose.Schema({
  rollNumber: Number,
  batch: String,
  name: String,
  email: String,
  gender: String,
  phoneNumber: Number,
});

const ClassmateModel = mongoose.model("classmate", ClassmateSchema);

module.exports = ClassmateModel;
