const fs = require("fs");
const http = require("http");
const port = +process.argv[2];

const server = http.createServer((req, res) => {});

server.listen(port, () => console.log(`Server on port: ${port}`));
