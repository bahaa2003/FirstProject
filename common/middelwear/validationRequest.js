const {StatusCodes} = require("http-status-codes");

module.exports=(schema)=>{
    return (req , res , next)=>{
        const validateArr = [];
        [('headers' , 'params' , 'query' , 'body')].forEach(key =>{
            if (schema[key]) {
                const validateArr = schema[key].validate(req[key]);
            }
        })
                if(validateArr.error){
            validateArr.push(validateArr.error.details[0].message)
        }
        if(validateArr.length){
            res.status(StatusCodes.BAD_REQUEST).json({mss:validateArr.join()})
        }else{
            next();
        }
    }
}



