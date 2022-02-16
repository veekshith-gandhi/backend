const express = require("express")
const  ejs = require("ejs")
const cors = require("cors")

const app = require("./routes/index.js")
const  connect  = require("./config/db")

const app = express()
const PORT = 5000

app.set("view engine", "ejs")
// app.use(express.static("view"))

app.get("/", (req, res, next) => {
    res.render("index", { title: "hello" })
    next()
})
app.use(cors())
app.use(express.json())
// app.use("/",routes)


const start = async()=>{
    await connect()
    app.listen(PORT,()=>{
        console.log(`listening....${PORT}`)
    })
}
 module.exports = start