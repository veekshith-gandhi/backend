const express = require("express")
const app = express.Router()

const userController= require("../controller/user.controller")

app.use("/users", userController)

module.exports = app