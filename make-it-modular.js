const mymodule = require("./mymodule")
const file = process.argv[2]
const ext =  process.argv[3]

mymodule((err, data) => {
  if (err) {
  return console.log(err)
  } 
    for (const item of data) {
      console.log(item)
    }

  
})