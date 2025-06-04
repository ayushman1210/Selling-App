const express=require('express');
const router=express.Router();
const user=require('../Schema/userschema')
const JWT=require('jsonwebtoken')
const purchase=require('../Schema/purchase')
require('dotenv').config();

console.log(process.env.JWT_PASSWORD1)
router.post('/signin',async(req,res)=>{
   const {firstName,lastName,email,password}=req.body;
   await user.create({firstName,lastName,email,password})
 res.json({
    messgae:"all good to go",
    success:true
 })
})




router.post('/signup',async(req,res)=>{
   const {email,password}=req.body;
   const User=await user.findOne({
      email:email,
      password:password
   })
   if(User){
      const token=JWT.sign({
         id:user._id,
      },process.env.JWT_PASSWORD1)

        res.json({
      token:token
    })
   }
   else{
      res.json({
         message:'something error'
      })
   }
  
})





router.get("/purchase",async(req,res)=>{
const userId=req.userId;
const Purchase=await purchase.find({
   userId
})
res.json({
   Purchase
})
})

module.exports=router