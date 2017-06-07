var express = require("express");
var mongoose = require("mongoose");
var Comment = require("../models/comment");
var router = express.Router();

router.get("/", getComments);
router.get("/username", getCommentsByUsername);
router.get("/:id", getCommentById);
router.post("/create", createComment);
router.put("/:id", updateComment);
router.delete("/:id", removeComment);

module.exports = router;

function getComments(req, res) {
  Comment.find({}, function (err, comment) {
    if (err) {
      res.send(err);
    }
    if (comment) {
      res.json(comment);
    }
  })
}

function getCommentsByUsername(req, res) {
  Comment.find({author: req.query.username}, function(err, comments) {
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

function getCommentById(req, res) {
  Comment.findOne({ _id: req.params.id }, function (err, comment) {
    if (err) {
      res.status(500).json({
        message: err
      })
    }

    if (comment) {
      res.status(200).json({
        comment: comment
      })
    }

  })
}

function createComment(req, res) {
  var comment = new Comment({
    title: req.body.comment.title,
    author: req.body.comment.author,
    text: req.body.comment.text,
    favorite: req.body.comment.favorite
  });

  comment.save(function (err, comment) {
    if(err) {
      res.status(500).json({
        message: err
      })
    }

    if(comment) {
      res.status(200).json({
        comment: comment
      });
    }
  })
}

function updateComment(req, res) {
  Comment.findByIdAndUpdate({ _id: req.body.comment._id}, req.body.comment, function (err, comment) {
    if(err) {
      res.status(500).json({
        message: err
      })
    }

    if(comment) {
      res.status(200).json({
        message: "Comment updated"
      });
    }
  })
}

function removeComment(req ,res) {
  Comment.findByIdAndRemove({ _id: req.params.id }, function(err, comment) {
    if (err) {
      res.status(500).json({
        message: err
      })
    } else {
      res.status(200).json({
        comment: comment
      })
    }
  });
}