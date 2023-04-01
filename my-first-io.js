const fs = require("fs") 
const input = process.argv[2]

const file = fs.readFileSync(input, "utf-8")

console.log( file.split("\n").length -1)
