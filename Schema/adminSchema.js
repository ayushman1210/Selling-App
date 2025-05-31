const mongoose =require('mongoose');

const AdminSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
})

const Admin= new mongoose.model('Admin',AdminSchema);

module.exports=Admin;