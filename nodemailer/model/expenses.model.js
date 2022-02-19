const mongoose = require("mongoose")

const expensesSchema = new mongoose.Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    date : {type:Date,required:true},
    reimbursed : {type:String,required:true},
    reimbursedDate: { type: String, required: true },
    employee_id : {type:String,required:true}
},{timestamps:true})

const Expenses = mongoose.model("expenses", expensesSchema)
module.exports = Expenses