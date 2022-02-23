/** @format */

const Student = require("../models/student.model");

const studentInfo = async (req, res) => {
  console.log(req.body);
  try {
    const student = await Student.create({
      roll_no: req.body.roll_no,
      user: req.id,
      batch: req.body.batch,
    });
    if (!student) return res.status(404).json({ message: "student not found" });

    return res.status(200).json(student);
  } catch (error) {
    return res
      .status(200)
      .json({ status: "something went wrong", message: error });
  }
};

module.exports = { studentInfo };
