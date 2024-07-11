const { StatusCodes } = require("http-status-codes");

const jwt = require("jsonwebtoken");
const rbac = require("../rbac/rbac")


module.exports=(endpoint)=>{
    return async (req , res , next)=>{
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            if(token){
                try {
                    const decoded = jwt.verify(token , "shhhhh");
                    const isAlaowed = await rbac.can(decoded.role , endpoint)
                    if (isAlaowed) {
                        next();
                    }else{
                        res.status(StatusCodes.UNAUTHORIZED).json({message:"unauthorized"})
                    }
                    
                } catch (error) {
                    res.json({message:error})
                }
            }else{
                res.status(StatusCodes.UNAUTHORIZED).json({message:"unauthorized"})
            }
        }
    }
}