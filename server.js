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



var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/todoListRoutes'); //importing route
app.use(express.static('static'))
routes(app); //register the route
var port = process.env.PORT 
if(port == undefined) port=3000
app.listen(port);






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






