var express = require("express");
var mongoose = require("mongoose");
var Comment = require("../models/comment");
var router = express.Router();

router.get("/", getComments);
router.get("/username", getCommentsByUsername);
router.get("/edit/:id", getCommentById);
router.get("/authors", getAuthorsOfComments);
router.post("/search", searchComments);
router.post("/create", createComment);
router.put("/edit/:id", updateComment);
router.delete("/:id", removeComment);

module.exports = router;

function getComments(req, res) {
  Comment.find({}, function (err, comment) {
    if (err) {
      res.status(500).json({
        message: err
      });
    }
    if (comment) {
      res.status(200).json({
        comments: comment
      });
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

function getAuthorsOfComments(req, res) {
  Comment.find({}, { author: 1 }, function(err, authors) {
    if (err) {
      res.status(500).json({
        message: err
      })
    }

    if (authors) {
      res.status(200).json({
        authors: authors
      })
    }
  })
}

function searchComments(req, res) {
  var query = {};

  if (req.body.comment.author && req.body.comment.author.length === 1) {
    query.author = req.body.comment.author[0].text;
  }

  if (req.body.comment.text) {
    query.text = req.body.comment.text;
  }

  if (req.body.comment.title) {
    query.title = req.body.comment.title;
  }

  if(Object.keys(query).length > 0) {
    Comment.find(query).then(function(comments) {
    if (comments) {
      res.status(200).json({
        comments: comments
      })
    }
    }).catch(function(err) {
    if (err) {
      res.status(500).json({
        message: err
      })
    }
  }) 
  } else {
    res.status(200).json({
        not_found: "Comments found not"
    })
  }
}

function createComment(req, res) {
  var comment = new Comment({
    title: req.body.comment.title,
    author: req.body.comment.author,
    text: req.body.comment.text
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