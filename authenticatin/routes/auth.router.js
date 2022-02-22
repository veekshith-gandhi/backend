const express = require("express")
const { signin, signup } = require("../controller/auth.controller")
const router = express.Router()
const passport = require("passport")

router.post("/signin", signin)
router.post("/signup", signup)

router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log(req.user)
    res.status(200).send("success")
    // res.redirect('/');
  });


module.exports = router