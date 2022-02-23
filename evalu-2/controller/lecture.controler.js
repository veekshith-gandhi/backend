/** @format */

const Lecture = require("../models/lecture.model");

const lectureInfo = async (req, res) => {
  try {
    const lecture = await Lecture.create({
      title: req.body.title,
      author_id: req.id,
      batch: req.body.batch,
    });
    if (!lecture)
      return res.status(404).json({ message: "lectures not found" });

    return res.status(200).json(lecture);
  } catch (error) {
    return res
      .status(200)
      .json({ status: "something went wrong", message: error });
  }
};

const getAllLecture = async (req, res) => {
  try {
    const lectures = await Lecture.find();

    if (!lectures)
      return res.status(404).json({ message: "lectures not found" });

    return res.status(200).json(lectures);
  } catch (error) {
    return res
      .status(200)
      .json({ status: "something went wrong", message: error });
  }
};

const getById = async (req, res) => {
  try {
    const lectures = await Lecture.findById({ _id: req.params.id });

    if (!lectures)
      return res.status(404).json({ message: "lectures not found" });

    return res.status(200).json(lectures);
  } catch (error) {
    return res
      .status(200)
      .json({ status: "something went wrong", message: error });
  }
};

const deletById = async (req, res) => {
  try {
    const lectures = await Lecture.deleteOne({ author_id: req.params.id });
    console.log(lectures);
    return res.status(204).json({ msg: "deleted" });
  } catch (error) {
    return res
      .status(200)
      .json({ status: "something went wrong", message: error?.message });
  }
};

module.exports = { lectureInfo, getAllLecture, getById, deletById };
