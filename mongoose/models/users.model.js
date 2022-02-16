const mongoose= require("mongoose")

/**
 * schema
 */
const UserSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    company_name:{type:String,required:true},
    email:{type:String,required:true},
    ratings:{type:Number,required:true},
    location:{type:String,required:true},
    country_code:{type:String,required:true},
})
/**
 * model
 */
const Users = mongoose.model("users", UserSchema)

module.exports = Users