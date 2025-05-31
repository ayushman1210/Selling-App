const express=require('express');
const router=express.Router();
const admin=require('../Schema/adminSchema')
const JWT=require('jsonwebtoken')
const JWT_PASSWORD="hopesalive"
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
      },JWT_PASSWORD)

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
router.post('/course',(req,res)=>{

})
router.put('/course',(req,res)=>{

})
router.get('/course/bulk',(req,res)=>{
    
})

module.exports=router;