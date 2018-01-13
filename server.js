var express = require("express");
var http = require("http");
var app = express();
var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log("Connected to server on port " + port);
});