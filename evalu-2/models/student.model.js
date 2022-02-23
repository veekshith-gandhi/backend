/** @format */

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  user: { type: String },
  roll_no: { type: Number },
  batch: { type: String },
});

const Student = mongoose.model("students", studentSchema);

module.exports = Student;
