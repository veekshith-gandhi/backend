const express = require("express")
const router = express.Router()

const getEmployeeData = require("../controller/employee.controller")

router.get("/", getEmployeeData)

module.exports = router