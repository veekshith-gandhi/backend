const express = require("express")

const cors = require("cors")
const userRouter = require("./routes/user.route")
const  connect  = require("./config/db")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use("/users",userRouter)

const start = async()=>{
    await connect()
    app.listen(PORT,()=>{
        console.log(`listening....${PORT}`)
    })
}
 module.exports = start