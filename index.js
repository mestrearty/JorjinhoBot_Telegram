"use strict";

var http = require("http");
var port = process.env.port || 5000;

require("./bot")();

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ name: "jorjinhobot", ver: "0.0.1" }));
    response.end();
  })
  .listen(port);
