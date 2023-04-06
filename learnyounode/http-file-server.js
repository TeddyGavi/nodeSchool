const fs = require("fs");
const http = require("http");
const port = +process.argv[2];
const fileLoc = process.argv[3];

const server = http.createServer((req, res) => {
  req.on("data", (data) => console.log(data));
  console.log(req.headers);

  res.writeHead(200, { "content-type": "text/plain" });

  fs.createReadStream(fileLoc).pipe(res);
});

server.listen(port, () => console.log(`listening on port ${port}`));
