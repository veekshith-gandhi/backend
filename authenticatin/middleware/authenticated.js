const jwt = require("jsonwebtoken")
const Users = require("../models/user.model")

const verifyToken = (token) => {
    return new Promise((resolve,reject)=>{
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) return reject(err)
            
            return resolve(decoded)
    })
    })
}


const authenticated = async (req, res, next) => {
   
try {
    let bearer = req.headers.authorization
    if(!bearer || !bearer.startsWith("Bearer ")) return res.status(200).json({status:"failure" ,message:"no token present"})
   
    const token = bearer.split("Bearer ")[1].trim()

    //verify user by token
    const decoder = await verifyToken(token)
    if (!decoder) return res.status(401).json({ status: "failure", message: "invalid token" })
   
    const user = await Users.findById(decoder.id)
    if(!user) return res.status(401).json({status:"failure",message:"user doesn't exist"})
     req.user = user
    //authorization 
    next()
} catch (error) {
    res.status(500).json({status:"failur",message:error})
}


   
}

module.exports = authenticated