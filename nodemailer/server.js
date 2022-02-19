const express = require("express")
const app = express()

const connect = require("./config/db")
const expensesController = require("./router/expenses.router")
const userController = require("./router/email.router")
const employeeController = require("./router/employee.router")

const PORT = 5000
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use("/email", userController)
app.use("/expenses", expensesController)
app.use("/employee",employeeController)



const start = async () => {
    await connect()
    app.listen(PORT, () => {
        console.log(`Listening....${PORT}`)
    })
}

module.exports = start

