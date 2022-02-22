const Users = require('../models/user.model')
const jwt = require("jsonwebtoken")
require("dotenv").config()

const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        email:user.email
    }, process.env.SECRET_KEY,
        { expiresIn: "1h" }
    )  
}

const signup = async (req, res) => {
    
    try {
        const idDoesNotExist = await Users.findOne({ email: req.body.email })
        if (idDoesNotExist) return res.status(404).json({ message: "user existed" })
        const user = await Users.create(req.body)
        
        const token = generateToken(user)
        res.status(200).json({
            status: "success", data: {
                id:user._id,
                email: user.email,
                token
       }})
    }
    catch (error) {
   res.status(200).json({status:"failure",message : error})   
  }
}

const signin = async (req, res) => {
  let user 
    try {
          //checking the email
        user = await Users.findOne({ email: req.body.email })
        
          if (!user) return res.status(401).json({ message: "user not existed" })
    }
    catch (error) {
    res.status(200).json({status:"failure",message : error})   
    }
    // console.log("user",user)
    let isMatch 
    try {
        //checking the password
        //filtered user
        isMatch = await user.comparePassword(req.body.password)
        if (!isMatch) return res.status(401).json({ message: "invalid email or password" })
         }
         catch (error) {
         res.status(200).json({status:"failure",message : error})   
    }
    const token = generateToken(user)
    return res.status(200).json({
        id: user._id,
        email: user.email,
        token
    })
    
}

module.exports = {signin,signup,generateToken}