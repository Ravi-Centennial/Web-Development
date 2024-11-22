// const { createServer } = require('node:http');

// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hello World</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import {a, b, c, d} from "./mymodule.js";

console.log(a, b, c, d)

import harry from "./mymodule.js";

console.log(harry)

// const a = require("./mymodule2.js")
// console.log(a)