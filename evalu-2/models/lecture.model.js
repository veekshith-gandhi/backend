/** @format */

const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    title: { type: String },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    batch: { type: String },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Lecture = mongoose.model("lectures", lectureSchema);

module.exports = Lecture;
