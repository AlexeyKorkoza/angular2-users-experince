var express = require("express");
var router = express();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var jwtSecret = "Anaheim Mighty Ducks";

router.get('/check', function(req, res, next){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') {
    console.log(req.headers.authorization);
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, jwtSecret, function (err, decoded) {
      if (err) { 
        console.log(err);
        res.status(401).end(err); 
      }
      var userId = decoded.sub;
      console.log(userId);
      User.findById(userId, function (err, user) {
        if (err || !user) {
          console.log(err);
          res.status(401).end(err);
        } else {
          res.status(200).json({
            success: true,
            user: user
          })
        }
      });
    });
  } else {
    res.status(403).end("User not authenticated"); 
  }
});

module.exports = router;