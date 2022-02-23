/** @format */

const express = require("express");
const { studentInfo } = require("../controller/student.controller");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.post("/", authenticate, studentInfo);

module.exports = router;
