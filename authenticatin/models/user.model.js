const { Mongoose } = require("mongoose");

const UserSchema = new Mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    {timeStamp:}

})