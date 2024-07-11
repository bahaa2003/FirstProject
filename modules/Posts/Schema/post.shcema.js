const mongoose = require("mongoose");
const schema = mongoose.Schema
const bcrypt = require("bcrypt")
const postSchema = schema({
    title : {type : String  , required: true },
    desc : {type : String , required: true},
    createdBy :{ type: schema.Types.ObjectId, ref: 'user' },
    postImage : {type : String}
},
{
    timestamps : true,
}
)

module.exports=postSchema