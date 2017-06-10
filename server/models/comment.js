var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  author: String,
  title: String,
  text: String,
  favorite: Number
});

var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;