const mongoose = require("mongoose");
const schema = mongoose.Schema
const reportPostSchema = schema({
    userID : { type: schema.Types.ObjectId, ref: 'user' },
    postID : { type: schema.Types.ObjectId, ref: 'post' },
    reportComment :{type : String  , required: true}
},
{
    timestamps : true,
}
)

module.exports=reportPostSchema