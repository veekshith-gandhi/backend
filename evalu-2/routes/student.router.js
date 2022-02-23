/** @format */

const express = require("express");
const { studentInfo } = require("../controller/student.controller");
const router = express.Router();

router.post("/", studentInfo);

module.exports = router;
