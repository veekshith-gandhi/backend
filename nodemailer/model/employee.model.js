const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    // _id:{type:Number,required:true},
    name: { type: String, required: true },
    gender : {type:String,required:true}
})

const Employee = mongoose.model("employee", employeeSchema)
module.exports = Employee