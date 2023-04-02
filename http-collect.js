const http = require("http");

http
  .get(process.argv[2], (res) => {
    let result = "";
    res.on("data", (data) => {
      // on any data event read and build the string
      result += data.toString();
    });
    res.on("end", () => {
      // on the end of each data stream print the length and the full string
      console.log(result.length);
      console.log(result);
    });
  })
  .on("error", console.error);
