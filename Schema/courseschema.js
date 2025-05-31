
const mongoose=require('mongoose');

const courseSchema= new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    title:String,
    description:String,
    price:Number
})

const course=new mongoose.model('course',courseSchema);

module.exports=course;