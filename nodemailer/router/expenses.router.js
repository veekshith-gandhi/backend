const express = require("express")
const router = express.Router()
const {expenses,expensesGrouped,expensesLookup} = require("../controller/expenses.controller")

router.get("/", expenses)
router.get("/grouped", expensesGrouped)
router.get("/lookup", expensesLookup)


module.exports = router
