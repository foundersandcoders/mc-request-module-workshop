const http = require("http");
const https = require("https");

const myRequest = (url, cb) => {
  const urlObj = new URL(url);
  const protocol = urlObj.protocol === "https:" ? https : http;
  protocol
    .get(url, response => {
      let data = "";
      response.on("data", chunk => {
        data += chunk;
      });
      response.on("end", () => {
        const body = JSON.parse(data);
        const statusCode = response.statusCode;
        cb(null, { statusCode, body });
      });
    })
    .on("error", err => cb(err));
};

module.exports = myRequest;
