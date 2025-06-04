const express=require('express');
const auth = require('../middleware/adminauth');
const purchase = require('../Schema/purchase');
const course=require('../Schema/courseschema')
const router=express.Router();

router.get('/all',async (req,res)=>{
   const Course=await course.find({});
    res.json({
        messgae:"all the course ",
        course:Course
    })
})

router.get("/purchased",auth,async (req,res)=>{
    const userId=req.userId;
    const courseId=req.courseId;

    await purchase.create({
        userId,
        courseId
    })
res.json({
    message:"purchased course "
})
})

module.exports= router;