const mymodule = require("./mymodule")
const file = process.argv[2]
const ext =  process.argv[3]

mymodule(file, ext, (err, data) => {
  if (err) {
   console.log(err)
  } else {
    console.log(data)

  }
})