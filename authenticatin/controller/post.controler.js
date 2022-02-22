const Posts = require("../models/post.model")

const postUser = async (req, res) => {
  try {
   
      const post = await Posts.create({
          title: req.body.title,
          author_id:req.body.author_id
      }) 
    if (!post) return res.status(404).json({ message: "post not created" })
    
       res.status(200).json(post)
   } catch (error) {
        return res.status(200).json({message :error})
   }  
}

module.exports = {postUser}