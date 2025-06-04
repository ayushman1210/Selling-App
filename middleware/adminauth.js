const jwt=require('jsonwebtoken')
require('dotenv').config();
console.log(process.env.JWT_PASSWORD)
function auth(req,res,next){
    try {
        let token =req.headers.authorization;
        if(!token){res.json({
    message:"no token provided",
})}
const decode=jwt.verify(token,process.env.JWT_PASSWORD)

if(decode){
    req.userId=decode.id;
    next()
}else{
    res.status(403).json({
        message:"somehting error in the token generation "
    })
}
    } catch (e) {
        console.log(e);
    }

}


module.exports=auth;