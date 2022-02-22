const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    title: { type: String },
    
    author_id: { type: String },

  
}, { timestamps: true })



const Posts = mongoose.model("posts", UserSchema)

module.exports = Posts