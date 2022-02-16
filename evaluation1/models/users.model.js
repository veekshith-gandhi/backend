const mongoose= require("mongoose")

/**
 * schema
 */
const UserSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    company_id:{type:String,required:true},
    name: { type: String, required: true },
    gender:{type:String,required:true},
    expenses: {
        type: { type: String, required: true },
        date: { type: string, required: true },
        reimbursed: { type: Boolean, required: true },
        timestamp: { type: Number, required: true },
    }
   
})
/**
 * model
 */
const Users = mongoose.model("users", UserSchema)

module.exports = Users