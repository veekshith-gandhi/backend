const multer = require("multer")
const path = require("path")

/**
 * deskstorage allows you to store file in destination
 * 
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
    storage,
   
})

module.exports = upload