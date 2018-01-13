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
  var date = new Date(userInput);
  var unixFormat;
  var naturalFormat;

  var test = typeof userInput;
  
  
  if(typeof userInput == 'number'){
      //convert to natural date format
    unixFormat = userInput;
    naturalFormat = date.getMonth() + " " + date.getDay() + " " + date.getFullYear();
    
    response.json({
      "unix": unixFormat, 
      "natural": naturalFormat,
      "test":test
  });
    
  }else{
      response.json({
      "unix": null, 
      "natural": null,
              "test":test

  });
    
  }
 
  /* if userInput is in UNIX date format <--- it will be all numbers, no letters, and not a string
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
