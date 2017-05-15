var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");

router.post("/register", createUser);

module.exports = router;

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
