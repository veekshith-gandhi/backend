/** @format */

const Lecture = require("../models/lecture.model");

const lectureInfo = async (req, res) => {
  console.log(req.body);
  try {
    const lecture = await Lecture.create({
      title: req.body.title,
      author_id: req.body.author_id,
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

module.exports = { lectureInfo };
