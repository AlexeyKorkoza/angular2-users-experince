var express = require("express");
var mongoose = require("mongoose");
var commentModel = require("../models/comment");
var router = express.Router();

router.get("/", getComments);
router.get("/username", getCommentsByUsername);

module.exports = router;

function getComments(req, res) {
  commentModel.find({}, function (err, comment) {
    if (err) {
      res.send(err);
    }
    if (comment) {
      res.json(comment);
    }
  })
}

function getCommentsByUsername(req, res) {
  commentModel.find({author: req.query.username}, function(err, comments) {
    if(err) {
      res.status(500).json({
        message: err
      })
    }

    if(comments.length === 0) {
      res.status(200).json({
        message: "Comments foundn't"
      })
    }

    if(comments.length > 0) {
      res.status(200).json({
        comments: comments
      })
    }
  })
}