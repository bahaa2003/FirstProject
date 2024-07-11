const mongoose = require("mongoose");
const postSchema = require("../Schema/post.shcema");

const Post = mongoose.model("post",postSchema);


module.exports=Post