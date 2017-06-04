var express = require("express");
var passport = require("passport");
var router = express();

router.post("/login", function(req, res) {
   passport.authenticate("local-login", { failureFlash: true }, function(err, userData) {
    if(err) {
      if(err.name === 'Incorrect Credentials Error') {
        return res.status(400).json(
          {
            success: false,
            errors: [{
              type: 'Authentication Error',
              messages: 'Incorrect Credentials Error',
            }]
          }
        );
      }

      return res.status(400).json({
        success: false,
        errors: [{
          type: 'Authentication Error',
          messages: 'Could not process the form.',
        }],
      });
    }

    if(userData) {
     return res.status(200).json({
       success: true,
       user: userData
     })
    } else {
      return res.status(200).json({
       success: false,
       message: req.flash('loginMessage')[0],
     })
    }
  })(req, res);
});

module.exports = router;
