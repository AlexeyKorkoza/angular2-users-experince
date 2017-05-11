var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var ejs = require('ejs');
var mongoose = require("mongoose");
var morgan = require("morgan");
var app = express();

var port = 8000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/users_experince");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(morgan("dev"));

app.use(require("./routers"));

app.listen(port, function () {
  console.log("server start in port " + port);
});