var express = require("express");
var app = express();

var http = require("http");
var server = http.Server(app);

app.use(express.static("client"));

var io = require("socket.io")(server);

var array = [];

io.on("connection", function (socket) {
  array.forEach(function (msg) {
    socket.emit("message", msg);
  });
  socket.on("message", function (msg) {
    array.push(msg);
    io.emit("message", msg);
  });
});

server.listen(8080, function () {
  console.log("Chat server listening on port 8080!");
});
