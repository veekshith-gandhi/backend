const express = require("express")
const  userController= require("../controller/user.controller")

const app = express()
app.use("/users", userController)
