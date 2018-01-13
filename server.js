// server.js
// where your node app starts

//Example usage:
//https://timestamp-ms.herokuapp.com/December%2015,%202015
//https://timestamp-ms.herokuapp.com/1450137600
//Example output:
//{ "unix": 1450137600, "natural": "December 15, 2015" }

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  console.log("index.html");
});
/*
app.get("/:lol", function (request, response) {
  
  var amIaNum = Number(request.params.lol);
  
  response.json({
      "unix": lol, 
      "natural": lol
  });
});


*/


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
