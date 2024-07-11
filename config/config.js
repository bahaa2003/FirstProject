const mongoose = require("mongoose");

const connection = ()=>{
    return mongoose.connect(process.env.CONCTION,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports=connection