"use strict";

const http = require("http");

const myRequest = (url, cb) => {
  http
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

// uncomment below for bonus https solution

// const https = require("https");

// const myBonusRequest = (url, cb) => {
//   const protocol = url.includes("https") ? https : http;
//   protocol
//     .get(url, response => {
//       let data = "";
//       response.on("data", chunk => {
//         data += chunk;
//       });
//       response.on("end", () => {
//         const body = JSON.parse(data);
//         const statusCode = response.statusCode;
//         cb(null, { statusCode, body });
//       });
//     })
//     .on("error", err => cb(err));
// };

module.exports = {
  myRequest
  // uncomment line below to export bonus solution
  // ,myBonusRequest
};
