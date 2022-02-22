const express = require("express");
const connect = require("./config/db");
const app = express();
const port = 5000;
const authController = require("./routes/auth.router")
const userController = require("./routes/users.router")
const postController = require("./routes/posts.router")
const passport = require("./config/passport");
const MongoStore = require("connect-mongo");
const session = require('express-session')

app.use(express.json());
app.use("/auth", authController)
app.use("/users", userController)
app.use("/post", postController)


app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl:"mongodb://localhost:27017/oauth"
    })
  }))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user,done) {
  done(null,user)
})
passport.deserializeUser(function (user,done) {
  done(null,user)
})

const start = async() => {
     await connect()
    app.listen(port, () => {
    console.log("listing... 5000");
  });

}
module.exports = start