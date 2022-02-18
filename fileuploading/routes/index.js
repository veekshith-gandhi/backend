const express = require("express")
const router = express.Router()

const { body, validationResult } = require('express-validator');
const { getUser, getUserById, postUser, patchById, deletById } = require("../controller/user.controller");
const upload = require("../utils/fileUpload");

router.get("/", getUser)
router.get("/:id", getUserById)
router.delete("/:id",deletById)
router.post("/", upload.single("avatar"),body('company_name').not().isEmpty().withMessage("Name required"),
    body('ratings').isLength({ min: 2 }).withMessage("minimum 2"), postUser)
router.patch("/:id", patchById)

module.exports = router