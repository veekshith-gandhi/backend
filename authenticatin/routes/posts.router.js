const express = require("express")
const { postUser } = require("../controller/post.controler")
const router = express.Router()

router.post("/",postUser)
module.exports = router