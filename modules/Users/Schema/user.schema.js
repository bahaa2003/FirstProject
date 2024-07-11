const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const Joi = require("joi");
const userSchema = new mongoose.Schema({
    name : {type : String  , required: true },
    email : {type : String , required: true},
    password : {type : String , required: true},
    cPassword : {type : String , required: true , ref:"password"},
    phone : {type :Number},
    location : {type : String , required: true},
    role : {type : String  , default:"user"},
    activate  : {type : Boolean  , default:true},
    oldPassword : {type : String , ref:"password"},
    blockUser  : {type : Boolean  , default:false}
},
{
    timestamps : true,
}
)
userSchema.pre("save", async  function (next) {
    this.password = await bcrypt.hash(this.password , 8);
    next();
})
userSchema.pre("save", async  function (next) {
    this.cPassword = await bcrypt.hash(this.cPassword , 8);
    next();
})
module.exports=userSchema