const express=require('express');
const router=express.Router();

router.post('/signin',(req,res)=>{
    res.json({
        message:"admin portal"
    })
})

router.post('/signup',(req,res)=>{
    res.json({
        message:"admin signup"
    })
})

module.exports=router;