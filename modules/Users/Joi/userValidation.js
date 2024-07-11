const joi = require("joi")
module.exports={
    addUserSchema:{
        body:joi.object().required().keys({
            name : joi.string().required(),
            email : joi.string().required().email(),
            password : joi.string().required(),
            cPassword : joi.string().required().valid(joi.ref('password')),
            phone : joi.number().required(),
            location : joi.string().required(),
            activate : joi.string()
        })
    },
    signinSchema : {
        body:joi.object().required().keys({
            email : joi.string().required().email(),
            password : joi.string().required()
        })
    },
    deactivateUser:{
        params:joi.object().required().keys({
            id:joi.string()
        }),
},
updatePasswordSchema:{
    params:joi.object().required().keys({
        id:joi.string(),
        token:joi.string(),
    }),
    body:joi.object().required().keys({
        oldPassword : joi.string().required().valid(joi.ref('password')),
        newPassword : joi.string().required(),
        cNewPassword : joi.string().required().valid(joi.ref('newPassword'))
    })
},
}