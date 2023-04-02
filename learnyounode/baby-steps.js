const input = process.argv.slice(2)


const sumAllIn = ([...args]) => {
  const num = args.map(x => +x)
  return num.reduce((acc, curr) => curr += acc)
}

console.log(sumAllIn(input))