const mymodule = require("./mymodule")
const file = process.argv[2]
const ext =  process.argv[3]

mymodule(file, ext, (err, data) => {
  if (err) {
  return console.log(err)
  } 
  data.forEach(item => console.log(item))

  
})