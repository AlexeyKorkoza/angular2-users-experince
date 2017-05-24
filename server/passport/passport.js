var LocalStrategy = require("passport-local").Strategy;
var User = require('../models/user');

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

          var userData = {
           "username": user.username,
           "token": user.generateJWT()
          }
          
          return done(null, userData);
        });
      }
    )
  );
};
