const express = require("express")
const  ejs = require("ejs")
const cors = require("cors")

const userRouter= require("./routes/index")
const connect = require("./config/db")
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("view"))
app.get("/", (req, res) => {
    res.render("index")
})
app.use("/users", userRouter)
const start = async()=>{
    await connect()
    app.listen(PORT,()=>{
        console.log(`listening....${PORT}`)
    })
}
 module.exports = start