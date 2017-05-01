var express = require("express");
var mongoose = require("mongoose");
var commentModel = require("../models/comment");
var router = express.Router();

router.get("/", getComments);

module.exports = router;

function getComments(req, res) {
  commentModel.find({}, function (err, comment) {
    if (err) {
      res.send(err);
    }
    if (comment){
      res.json(comment);
    }
  })
}