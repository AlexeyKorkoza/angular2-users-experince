var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("jsonwebtoken");
var jwtSecret = "Anaheim Mighty Ducks";
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

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (user, password) {
  return bcrypt.compareSync(password, user.password);
};

userSchema.methods.generateJWT = function(){

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }, jwtSecret);

}

var User = mongoose.model('User', userSchema);

module.exports = User;