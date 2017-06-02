var express = require("express");
var router = express.Router();
var token = require('./token');
var User = require("../models/user");

router.get("", token.required, getUser);
router.get("/edit", getUserByUsername);
router.put("/edit", token.required, updateUser);
router.post("/register", createUser);

module.exports = router;

function getUser(req, res){

  User.findById(req.payload.id, function(err, user){
    if(err){
      res.json({
        success: false,
        message: err
      })
    }
    if(user){
      res.json({
        success: true,
        user: {
          username: user.username,
          token: user.generateJWT()
        }
      })
    }
  })
}

function getUserByUsername(req, res) {
  User.find({username: req.params.username}, function(err, user) {
    if(err) {
      res.status(500).json({
        success: false,
        message: err
      })
    }
    if(user) {
       res.status(200).json({
         success: true,
         user: {
           username: req.params.username
         }
       })
    }
  })
}

function updateUser(req, res) {

  User.findById(req.payload.id, function(err, user) {

    if(!user) {
      return res.status(401);
    }

    if(req.body.user.password !== '') {
      user.password = user.generateHash(req.body.user.password);
    }

    user.username = req.body.user.username;

    user.save(function(err, user1) {
      if(err) {
        return res.status(500).json({
          message: err
        })
      } else {
        return res.status(200).json({
          user: {
           username: user1.username,
           token: user1.generateJWT()
         }
        })
      }
    })

  })
}

function createUser(req, res) {
  var user = new User({
    username: req.body.username,
    time: req.body.time,
    date: req.body.time,
    email: req.body.email
  });

  user.password = user.generateHash(req.body.password);

  user.save(function(err) {
    if (err) {
      res.json({
        success: false,
        message: "Пользователь или электронный адрес уже существуют"
      });
    } else {
      res.json({
        success: true,
        message: "Пользователь создан"
      });
    }
  });
}
