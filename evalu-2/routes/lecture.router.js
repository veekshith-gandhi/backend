/** @format */

const express = require("express");
const { lectureInfo } = require("../controller/lecture.controler");
const router = express.Router();

router.post("/", lectureInfo);

module.exports = router;
