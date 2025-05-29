const express=require('express');
const router=express.Router();

router.get('/all',(req,res)=>{
    res.json({
        messgae:"all the course "
    })
})

router.get("/purchased",(req,res)=>{
res.json({
    message:"purchased course "
})
})

module.exports= router;