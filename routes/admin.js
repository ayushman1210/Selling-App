const express=require('express');
const router=express.Router();
const admin=require('../Schema/adminSchema')
const JWT=require('jsonwebtoken');
const course = require('../Schema/courseschema');
const adminauth=require('../middleware/adminauth')
require('dotenv').config();


router.post('/signin',async(req,res)=>{
   const {firstName,lastName,email,password}=req.body;
     await admin.create({firstName,lastName,email,password})
   res.json({
      messgae:"all good to go",
      success:true
   })
})



router.post('/signup',async (req,res)=>{
 const {email,password}=req.body;
   const Admin=await admin.findOne({
      email:email,
      password:password
   })
   if(Admin){
      const token=JWT.sign({
         id:admin._id,
      },process.env.JWT_PASSWORD)

        res.json({
      token:token
    })
   }
   else{
      res.status(403).json({
         message:'something error'
      })
   }
  
})


router.post('/course',adminauth,async (req,res)=>{
   const adminId=req.userId;
const {title,description,price}=req.body;
const coursedetail= await course.create({title,description,price, adminId:adminId});
res.json({
   message:"course created",
   coursedetail:coursedetail
})
})


router.put('/course',async (req,res)=>{
   const adminId=req.userId;
const {title,description,price,courseId}=req.body;
const update=await course.UpdateOne({_id:courseId, creatorId:adminId},{title:title, description:description, price:price})
res.json({
   message:"course created",
   updatedData:update
})
})



router.get('/course/bulk',async(req,res)=>{
    const adminId=req.userId;
    const course=await course.find({
      creatorId:adminId
    })
    res.json({
      courses:course
    })
})

module.exports=router;