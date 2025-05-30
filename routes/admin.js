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
router.post('/course',(req,res)=>{

})
router.put('/course',(req,res)=>{

})
router.get('/course/bulk',(req,res)=>{
    
})

module.exports=router;