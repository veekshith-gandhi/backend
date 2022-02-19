const express = require("express");
const connect = require("./config/db");
const app = express();
const port = 5000;
const authController = require("./routes/auth.router")
const userController = require("./routes/users.router")

app.use(express.json());
app.use("/auth", authController)
app.use("/users",userController)

const start = async() => {
     await connect()
    app.listen(port, () => {
    console.log("listing... 5000");
  });

}
module.exports = start