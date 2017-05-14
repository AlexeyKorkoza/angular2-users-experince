var express = require("express");
var passport = require("passport");
var router = express();

router.post("/login", function(req, res) {
  passport.authenticate("local-login", { failureFlash: true }, function(err) {
    res.json({
      message: req.flash('loginMessage')
    });
  })(req, res);
});

module.exports = router;
