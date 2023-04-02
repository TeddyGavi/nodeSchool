const http = require("http");
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const fetch = (URL) => {
  return new Promise((resolve, reject) => {
    const handler = (res) => {
      let result = "";

      res.on("data", (data) => {
        result += data.toString();
      });

      res.on("end", () => {
        resolve(result);
      });

      res.on("error", (err) => reject(err));
    };

    http.get(URL, handler);
  });
};

Promise.all([fetch(url1), fetch(url2), fetch(url3)])
  .then((data) => {
    console.log(data[0]), console.log(data[1]), console.log(data[2]);
  })
  .catch(() => console.error);
