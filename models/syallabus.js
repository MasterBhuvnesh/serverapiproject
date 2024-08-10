const mongoose = require("mongoose");

const SyallabusSchema = new mongoose.Schema({}, { strict: false }); // Allows any structure
const SyallabusModel = mongoose.model("syallabus", SyallabusSchema);

module.exports = SyallabusModel;
