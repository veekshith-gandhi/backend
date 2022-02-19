const express = require("express")
const { getUser } = require("../controller/users.controller")
const authenticated = require("../middleware/authenticated")
const router = express.Router()



router.get("/",authenticated,getUser)
module.exports = router