const fs = require("fs")
const path = require("path")





const mymodule = (dirName, ext, cb) => {
fs.readdir(dirName, "utf-8", (error, data) => {
  ext = "." + ext
    if (error) {
     return cb(error, null)
    }
    // fileExt = pathName(dirName)
    // const res = data.filter((x) => )

    cb(null, data.filter((x) => {
      return path.extname(x) === "." + ext
    }))      
    
  })
  
} 

module.exports = mymodule