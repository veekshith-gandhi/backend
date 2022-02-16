const express = require("express")
const router = express.Router()


router.get("/", async (req, res) => {
    
  try {
    const per_page = req.query.per_page || 5
    const page = req.query.page || 1
    const skip = page < 0 ? 0 : (page-1)*per_page
       const users = await Users.find().skip(skip).limit(per_page)
       if(!users) return res.status(404).json({message:"users not found"})
       res.status(200).json(users)
   } catch (error) {
        return res.status(200).json({message :error})
   }

})

module.exports = router