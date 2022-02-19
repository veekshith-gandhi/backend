const mongoose = require("mongoose")

const connect = () => {
    console.log("db connected")
   return mongoose.connect("mongodb://localhost:27017/employee_test")
}

module.exports = connect