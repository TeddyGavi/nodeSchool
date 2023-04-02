const fs = require("fs")
const path = process.argv[2]

 fs.readFile( path, "utf-8", (err, data) => {
  if (err) {
    throw new Error(err.message)
  }
  console.log(data.split("\n").length -1)
})

