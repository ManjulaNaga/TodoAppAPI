  var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./API/models.todoListModel'),
    bodyParser = require('body-parser');
    //app.listen(port);

//mongoose instance connection uri connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./API/routes/todoListRoutes');
routes(app); //register the routes

app.listen(port);
console.log('todo list RESTful API server started on '+port);
