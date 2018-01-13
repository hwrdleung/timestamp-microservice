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
});



app.get("/:userInput", function (request, response) {
  
  var userInput = request.params.userInput;
  
  /* if userInput is in UNIX date format
        convert to natural date format
        return json data
        
    if userInput is in natural date format
        convert to UNIX format
        return json data 
        
    else 
    response.json({
      "unix": null, 
      "natural": null
  });
  
  */
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
