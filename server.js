  var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    address = "localhost",
    mongoose = require('mongoose'),
    //Task = require('./API/models/todoListModel'),
    bodyParser = require('body-parser');

//mongoose instance connection uri connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoListDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./API/routes/todoListRoutes');
routes(app); //register the routes

app.listen(port);
console.log('todo list RESTful API server started on '+port);

var cache = {};

app.post('/set', function(req, res) {
  var query = req.query;
  Object.keys(query).forEach(function(key) {
    cache[key] = query[key];
  });
  res.status(200).end();
});


module.exports = app;


//export default Server;
