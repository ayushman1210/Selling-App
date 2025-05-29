const express=require('express');
const router=express.Router();

router.post('/signin',(req,res)=>{
 res.json({
    messgae:"all good to go",
    success:true
 })
})

router.post('/signup',(req,res)=>{
    
})

router.get("/purchase",(req,res)=>{

})

module.exports=router