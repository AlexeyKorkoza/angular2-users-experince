var LocalStrategy = require("passport-local").Strategy;
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var jwtSecret = "Anaheim Mighty Ducks";

module.exports = function(passport) {
  passport.use("local-login", new LocalStrategy({
        passReqToCallback: true
      },
      function(req, username, password, done) {
        User.findOne({ "username": username }, function(err, user) {
          
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, req.flash("loginMessage", "Oops! User not found."));
          }
          if (!user.validPassword(user, password)) {
            return done(null, false, req.flash("loginMessage", "Oops! Wrong password."));
          }         

          var payload = {
            sub: user._id
          }

          var token = jwt.sign(payload, jwtSecret);

         var userData = {
           "username": user.username,
           "token": token,
           "password": user.password,
           "date": user.date,
           "time": user.time,
           "email": user.email
         }

          console.log(user);
          
          return done(null, userData);
        });
      }
    )
  );
};
