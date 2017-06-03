var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Comment = mongoose.model("Comment", {
  author: String,
  header: String,
  text: String,
  favorite: Number
});

module.exports = Comment;