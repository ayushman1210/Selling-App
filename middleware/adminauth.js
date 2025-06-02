const jwt=require('jsonwebtoken')
require('dotenv').config();
function auth(req,res,next){
let token =req.headers.authorization;
const decode=jwt.verify(token,process.env.JWT_PASSWORD)
if(decode){
    req.userId=decode.Id;
    next()
}else{
    res.status(403).json({
        message:"somehting error in the token generation "
    })
}
}


module.exports=auth;