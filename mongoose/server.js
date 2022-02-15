const express = require("express")
const  connect  = require("./config/db")
const cors = require("cors")
const mongoose= require("mongoose")
const app = express()

const PORT = 5000
app.use(cors())

//schem
const UserSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    company_name:{type:String,required:true},
    email:{type:String,required:true},
    ratings:{type:Number,required:true},
    location:{type:String,required:true},
    country_code:{type:String,required:true},
})

//model
const Data = mongoose.model("user",UserSchema)

app.get("/",async(req,res)=>{
   const data = await Data.find()
   res.status(200).json({data})
})

const start = async()=>{
    await connect()
    app.listen(PORT,()=>{
        console.log(`listening....${PORT}`)
    })
}
 module.exports = start