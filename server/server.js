var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressSession = require("express-session");
var flash = require("connect-flash");
var mongoose = require("mongoose");
var morgan = require("morgan");
var passport = require("passport");
var config = require("./config");
var app = express();

var port = process.env.PORT || config.get('port');

mongoose.Promise = global.Promise;
mongoose.connect(config.get('db'));

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