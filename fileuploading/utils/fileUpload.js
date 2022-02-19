const multer = require("multer")
const path = require("path")

/**
 * deskstorage allows you to store file in destination
 * when u need to change the file u need multer
 * couz 
 */
const storage = multer.diskStorage({
    filename:function (req,file,callback) {
        callback(null,new Date().toISOString() +file.originalname)
    },
    destination:function (req,file,callback) {
        callback(null,path.join(__dirname,"../uploads"))
    }
})

const upload = multer({
    storage
})

module.exports = upload