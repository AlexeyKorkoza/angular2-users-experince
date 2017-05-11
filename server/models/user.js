var mongoose = require("mongoose");

var User = mongoose.model("User", {
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String,
  date: String,
  time: String
});

module.exports = User;