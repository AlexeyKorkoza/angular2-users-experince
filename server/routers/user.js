var express = require("express");
var router = express.Router();
var token = require('./token');
var User = require("../models/user");

router.get("", token.required, getUser);
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

function createUser(req, res) {
  var user = new User({
    username: req.body.username,
    time: req.body.time,
    date: req.body.time,
    email: req.body.email
  });

  user.password = user.generateHash(req.body.password),

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
