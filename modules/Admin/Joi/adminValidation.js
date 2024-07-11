const joi = require("joi")
module.exports={
    collAdmin:{
        body:joi.object().required().keys({
            name : joi.string().required(),
            email : joi.string().required().email(),
            password : joi.string().required(),
            cPassword : joi.string().required(),
            phone : joi.number().required(),
            location : joi.string().required(),
            activate : joi.string()
        
        })
    }
}