const net = require("net");
const port = +process.argv[2];

const modDate = (n) => (n < 10 ? "0" : "") + n;

const outHere = () => {
  let dateString = new Date();

  return (
    dateString.getFullYear() +
    "-" +
    modDate(dateString.getMonth() + 1) +
    "-" +
    modDate(dateString.getDate()) +
    " " +
    modDate(dateString.getHours()) +
    ":" +
    modDate(dateString.getMinutes())
  );
};

const server = net.createServer((socket) => {
  socket.end(outHere() + "\n"); //takes a string, or a string and cb
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
