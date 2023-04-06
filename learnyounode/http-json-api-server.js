const fs = require("fs");
const http = require("http");
const port = +process.argv[2];

/**
 * @param {Date} date to parse
 * @returns {object} hour: ... min: ... second: ...
 */

const parseTime = (date) => {
  const HrMinSec = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  return HrMinSec;
};

const server = http.createServer((req, res) => {
  // json res when /api/parsetime
  // {"hour": 14, "minute:" 23, "second": 15}
  // json res for path /api/unixtime
  // {"unixtime" : 137613... :number}

  const url = new URL(req.url, "http://example.ca");
  console.log(url);

  if (req.method === "GET" && url.pathname === "/api/parsetime") {
    console.log("in parse time");
    const search = url.searchParams.get("iso");
    console.log(new Date(search).getHours());
    console.log(parseTime(new Date(search)));
  }

  if (req.method === "GET" && url.pathname === "/api/unixtime") {
    console.log("in unix");
  }
});

server.listen(port, () => console.log(`Server on port: ${port}`));
