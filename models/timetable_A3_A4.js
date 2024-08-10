const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema({
  key: String,
  name: String,
  timeStart: String,
  timeEnd: String,
  teacher: String,
  room: String,
});

const TimetableSchema = new mongoose.Schema({
  day: String,
  classes: [ClassesSchema],
});

const TimetableModel_A3_A4 = mongoose.model("timetable_A3_A4", TimetableSchema);

module.exports = TimetableModel_A3_A4;
