const mongoose = require("mongoose");
const reportPostSchema = require("../Schema/reportPost.shcema");

const reportPost = mongoose.model("reportPost",reportPostSchema);


module.exports=reportPost