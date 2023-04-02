const http = require("http");
const port = +process.argv[2];
const fileLoc = process.argv[3];

const server = http.createServer((req, res) => {});

server.listen(port, () => console.log(`listening on port ${port}`));
