var express = require('express');
var router = express.Router();

router.get("/", renderStartPage);

module.exports = router;

function renderStartPage (req, res) {
  res.render("index.html");
}