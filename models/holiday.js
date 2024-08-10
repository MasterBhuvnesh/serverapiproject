const mongoose = require("mongoose");

const HolidaySchema = new mongoose.Schema({
  date: String,
  occasion: String,
  day: String,
});

const MonthlyHolidaysSchema = new mongoose.Schema({
  january: [HolidaySchema],
  february: [HolidaySchema],
  march: [HolidaySchema],
  april: [HolidaySchema],
  may: [HolidaySchema],
  june: [HolidaySchema],
  july: [HolidaySchema],
  august: [HolidaySchema],
  september: [HolidaySchema],
  october: [HolidaySchema],
  november: [HolidaySchema],
  december: [HolidaySchema],
});

const HolidayModel = mongoose.model("monthlyHolidays", MonthlyHolidaysSchema);

module.exports = HolidayModel;
