const mongoose = require("mongoose")

const connect =()=>{
    console.log("connected to db")
    return mongoose.connect('mongodb://localhost:27017/oauth');
}

module.exports = connect