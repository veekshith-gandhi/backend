/** @format */

const express = require("express");
const {
  lectureInfo,
  getAllLecture,
  getById,
  deletById,
} = require("../controller/lecture.controler");
const router = express.Router();

router.post("/", lectureInfo);
router.get("/", getAllLecture);
router.get("/:id", getById);
router.delete("/:id", deletById);

module.exports = router;
