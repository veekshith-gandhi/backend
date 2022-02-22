const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const { generateToken } = require('../controller/auth.controller');
const Users = require('../models/user.model');
require("dotenv").config()

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    try {
      const user = await Users.findOne({ email: profile?._json?.email })
      if (!user) {
        const user = await Users.create({
          email: profile?._json?.email,
          name: profile?.displayName,
          avatar: profile?._json?.picture,
          googleId: profile?.id,
          isGoogle:true
        })
        const token = generateToken(user)
        cb(null, user)
        // console.log("helo")
      }
       cb(null, user)
    } catch (error) {
     return cb(error, null);
    }
    // console.log(profile)
    cb(null,{})
      // return cb(err, user);
  // }
// );
  }
));

module.exports = passport

