"use strict";

const http = require("http");

const myRequest = (url, cb) => {
  return new Promise((resolve, reject) => {
    http
      .get(url, response => {
        let data = "";
        response.on("data", chunk => {
          data += chunk;
        });
        response.on("end", () => {
          const body = JSON.parse(data);
          const statusCode = response.statusCode;
          resolve({ statusCode, body });
        });
      })
      .on("error", reject);
  });
};

// uncomment below for bonus https solution

// const https = require("https");

// const myBonusRequest = (url, cb) => {
//   const protocol = url.includes("https") ? https : http;
//   return new Promise((resolve, reject) => {
//     protocol
//       .get(url, response => {
//         let data = "";
//         response.on("data", chunk => {
//           data += chunk;
//         });
//         response.on("end", () => {
//           const body = JSON.parse(data);
//           const statusCode = response.statusCode;
//           resolve({ statusCode, body });
//         });
//       })
//       .on("error", reject);
//   });
// };

module.exports = {
  myRequest,
  // uncomment line below to export bonus solution
  // myBonusRequest,
};
