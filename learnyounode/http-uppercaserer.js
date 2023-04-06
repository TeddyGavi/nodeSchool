const fs = require("fs");
const http = require("http");
const port = +process.argv[2];
const map = require("through2-map");

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    return res.end(`Only for posts`);
  }

  res.writeHead(200, { "content-tupe": "text/plain" });
  req.pipe(map((data) => data.toString().toUpperCase())).pipe(res);
});

server.listen(port, () => `Server Listening on port ${port}`);
