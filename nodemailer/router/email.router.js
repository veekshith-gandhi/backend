const express = require("express")
const sendEmail = require("../controller/email.controller")
const router = express.Router()

router.get("/", sendEmail)

module.exports = router
