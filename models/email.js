const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  batch: String,
  emails: [String],
});

const EmailModel = mongoose.model("email", EmailSchema);

module.exports = EmailModel;
