const mongoose = require("mongoose");
const schema = mongoose.Schema
const bcrypt = require("bcrypt")
const crudAdvertisingSchema = schema({
    title : {type : String  , required: true },
    desc : {type : String , required: true}
},
{
    timestamps : true,
}
)

module.exports=crudAdvertisingSchema