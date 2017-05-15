var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;

var userSchema = new Schema({
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

userSchema.methods.generateHash = function(password) {
     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(user, password) {
     return bcrypt.compareSync(password, user.password);
};

var User = mongoose.model('User', userSchema);

module.exports = User;