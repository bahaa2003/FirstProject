const joi = require("joi")
module.exports={
    addPostSchema:{
        body:joi.object().required().keys({
            title : joi.string().required(),
            desc : joi.string().required(),
            createdBy : joi.string().required()
        
        })
    },
    updatePostSchema:{
        params:joi.object().required().keys({
            id:joi.string()
        }),
        body:joi.object().required().keys({
            title : joi.string().required(),
            desc : joi.string().required(),
            createdBy : joi.string().required()
        
        })
    },
    deletePostSchema:{
        params:joi.object().required().keys({
            id:joi.string()
        }),
}
}