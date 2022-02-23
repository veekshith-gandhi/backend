/** @format */

const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: { type: String },
  author_id: { type: Number },
  batch: { type: String },
});

const Lecture = mongoose.model("lectures", lectureSchema);

module.exports = Lecture;
