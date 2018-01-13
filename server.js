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
  var unixFormat;
  var date = new Date(userInput);
  var naturalFormat;
  var month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  var test = typeof userInput;
  
  //something's wrong with this first condition
  if(IT IS A NUMBER){
      //convert to natural date format
    unixFormat = userInput;
    date = new Date(parseInt(userInput)*1000);
    naturalFormat = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    
    response.json({
      "unix": unixFormat, 
      "natural": naturalFormat,
    });
    
  }else if(date.toString() !== 'invalid date'){
    
    naturalFormat = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    unixFormat = date.getTime()/1000;
    
    response.json({
      "unix": unixFormat, 
      "natural": naturalFormat,
    });    
    
  }else if(date.toString() === 'invalid date'){
      response.json({
      "unix": null, 
      "natural": null,
  });
    
  }

  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
