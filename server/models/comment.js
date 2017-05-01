var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Comment = mongoose.model("Comment", {
  who_write: String,
  whom_write: String,
  header: String,
  text: String,
  count_of_plus: Number,
  count_of_minus: Number
});

module.exports = Comment;