const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000


const start = () => {
    app.listen(PORT, () => {
        console.log(`listening to port:${PORT}`)
    })
}
module.exports = start