var express = require("express");
var app = express();
var server = require("http").Server(app);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8081;
}
server.listen(port, function () {
  console.log(`Listening on ${server.address().port}`);
});
