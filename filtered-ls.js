const fs = require("fs")
const path = require("path")
const file = process.argv[2]
const ext = "." + process.argv[3]


fs.readdir(file, "utf-8", (err, data) => {
  if (err) {
    throw new Error(err.message)
  }
  for (const file of data) {
    const fileExt = path.extname(file)
    if (fileExt === ext) {
      console.log(file)
    }
  }
})