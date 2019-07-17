const http = require("http");
const https = require("https");

const myRequest = (url, cb) => {
  // the line below is extra - the solution to the bonus section
  const protocol = url.includes("https") ? https : http;
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

const consoleLoggingCallback = (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log({ body: response.body, statusCode: response.statusCode });
  }
};

myRequest("https://pokeapi.co/api/v2/pokemon/squirtle", consoleLoggingCallback);
