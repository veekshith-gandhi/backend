const express = require("express")
const router = express.Router()

const Users = require("../models/users.model")
const { body, validationResult } = require('express-validator');
const  {render}  = require("ejs");

/**
 * paggination
 */

router.get("/", async (req, res) => {
    
  try {
    const per_page = req.query.per_page || 5
    const page = req.query.page || 1
    const skip = page < 0 ? 0 : (page-1)*per_page
       const users = await Users.find().skip(skip).limit(per_page)
    if (!users) return res.status(404).json({ message: "users not found" })
    res.render("users",{users:users})
      //  res.status(200).json(users)
   } catch (error) {
        return res.status(200).json({message :error})
   }
    
})

router.get("/:id", async (req, res) => {

  try {
      const user = await Users.findOne({ id: req.params.id })
      if(!user) return res.status(404).json({message:"user not found"})
      res.status(200).json(user)
  } catch (error) {
    return  res.status(200).json({message :error})
  }
    
})

router.post("/", 
  body('company_name')
    .not()
    .isEmpty()
    .withMessage("Name required"),
  body('ratings')
    .isLength({ min: 2 })
    .withMessage("minimum 2")
, async (req, res) => {

    try {
      //validator
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      }
        
     //checking user existed or not 
     const idDoesNotExist = await Users.findOne({ id: req.body.id })
        if (idDoesNotExist) return res.status(404).json({ message: "user existed" })
        
    //create users
    const user = await Users.create({
      id:req.body.id,
      company_name: req.body.company_name,
      email:req.body.email,
      ratings:req.body.ratings,
      location: req.body.location,
      country_code:req.body.country_code,    
  })
    if (!user) return res.status(404).json({ message: "user not found" })
     res.status(200).json(user)
      
  } catch (error) {
        return  res.status(200).json({message :error})
      
  }
})

router.delete("/:id", async (req, res) => {

   try { 
     const user = await Users.findOneAndDelete({ _id: req.params.id })
    if (!user) return res.status(404).json({ message: "user not found" })
     res.status(200).json(user)
   } catch (error) {
        return  res.status(200).json({message :error})
   }
    
})

router.patch("/:id", async (req, res) => {

   try { 
       const user = await Users.findOneAndUpdate(
           { id: req.params.id },
           {
               $set: {
                company_name: req.body.company_name,
                email:req.body.email,
                ratings:req.body.ratings,
               }
           },
           {returnOriginal:false}
       )
    if (!user) return res.status(404).json({ message: "user not found" })
     res.status(200).json(user)
   } catch (error) {
        return  res.status(200).json({message :error})
   }
    
})

module.exports = router