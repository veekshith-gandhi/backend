const express = require("express")
const router = express.Router()

const Users = require("../models/users.model")
router.get("/", async (req, res) => {
    
    try {
   
    const per_page = req.query.per_page || 5
    const page = req.query.page || 1
    const skip = page < 0 ? 0 : (page-1)*per_page
        const users = await Users.find()
            .skip(skip).limit(per_page)
       if(!users) return res.status(404).json({message:"users not found"})
       res.status(200).json(users)
   } catch (error) {
        return res.status(200).json({message :error})
   }

})


router.get("/expenses", async (req, res) => {
    
    try {
        const users = await Users.aggregate([{ $match: { type: "internet" } }, { $sort: { id: -1 } }
        ])
       if(!users) return res.status(404).json({message:"users not found"})
       res.status(200).json(users)
   } catch (error) {
        return res.status(200).json({message :error})
   }

})


router.post("/", async (req, res) => {
    try {
     //checking user existed or not 
     const idDoesNotExist = await Users.findOne({ id: req.body.id })
        if (idDoesNotExist) return res.status(404).json({ message: "user existed" })
        
    //create users
    const user = await Users.create({
      id:req.body.id,
      employee_id: req.body.employee_id,
      name:req.body.name,
      gender:req.body.gender,
      type: req.body.type,
        reimbursed: req.body.reimbursed, 
      timestamp:45678
  })
    if (!user) return res.status(404).json({ message: "user not found" })
     res.status(200).json(user)
      
  } catch (error) {
        return  res.status(200).json({message :error})
      
  }
})


module.exports = router