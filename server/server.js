var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressSession = require("express-session");
var flash = require("connect-flash");
var mongoose = require("mongoose");
var morgan = require("morgan");
var passport = require("passport");
var app = express();

var port = 8000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/users_experince");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({
  secret: "keyboard cat"
}));
app.use(flash());

app.use(morgan("dev"));

require('./passport/passport')(passport);

app.use(require("./routers"));

app.listen(port, function () {
  console.log("server start in port " + port);
});