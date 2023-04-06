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

/**
 *
 * @param {Date} date from new Date constructor
 * @returns {object}
 */
const unix = (date) => {
  return { unixtime: date.getTime() };
};

const server = http.createServer((req, res) => {
  // json res when /api/parsetime
  // {"hour": 14, "minute:" 23, "second": 15}
  // json res for path /api/unixtime
  // {"unixtime" : 137613... :number}

  let modResponse;

  const url = new URL(req.url, "http://example.ca");
  const search = url.searchParams.get("iso");

  if (req.method === "GET" && url.pathname === "/api/parsetime") {
    console.log("in parse time");
    modResponse = parseTime(new Date(search));
  } else if (req.method === "GET" && url.pathname === "/api/unixtime") {
    console.log("in unix");
    modResponse = unix(new Date(search));
  } else {
    res.wiretHead(404);
    res.end();
  }

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(modResponse));
});

server.listen(port, () => console.log(`Server on port: ${port}`));
