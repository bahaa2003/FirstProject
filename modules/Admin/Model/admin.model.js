const mongoose = require("mongoose");
const adminSchema = require("../../Users/Schema/user.schema");

const admin = mongoose.model("admin",adminSchema);


module.exports=admin