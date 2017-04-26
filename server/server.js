var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var app = express();

var port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.listen(port, function () {
  console.log("server start in port 3000");
});