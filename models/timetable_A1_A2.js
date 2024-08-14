// const mongoose = require("mongoose");

// const ClassesSchema = new mongoose.Schema({
//   key: String,
//   name: String,
//   timeStart: String,
//   timeEnd: String,
//   teacher: String,
//   room: String,
// });

// const TimetableSchema = new mongoose.Schema({
//   day: String,
//   classes: [ClassesSchema],
// });

// const TimetableModel_A1_A2 = mongoose.model("timetable_A1_A2", TimetableSchema);

// module.exports = TimetableModel_A1_A2;

// // ------------------------------------------------------------------

const mongoose = require("mongoose");

const TimetableSchema = new mongoose.Schema({}, { strict: false }); // Allows any structure
const TimetableModel_A1_A2 = mongoose.model("timetable_A1_A2", TimetableSchema);

module.exports = TimetableModel_A1_A2;
