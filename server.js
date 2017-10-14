/*
COMMENTING IT OUT TO TEST FOR NOW
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

console.log('todo list RESTful API server started on: ');

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);*/


/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route
var port = process.env.PORT 
if(port == undefined) port=3000

app.listen(port);
*/





/*app.get('/', function (req, res) {
  res.send('Hello World!');
});
*/


/*
app.get('/person', function (req, res) {
  var person = { name : "Mitesh", id : 1}
  res.send(person);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});*/






var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 8081

// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   port = process.env.PORT || 8081

   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
   });   
}).listen(process.env.PORT);

// Console will print the message
//console.log('Server running at http://127.0.0.1:8081/');





