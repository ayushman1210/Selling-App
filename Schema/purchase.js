const mongoose=require('mongoose');

const purchaseSchema= new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
   courseId:mongoose.Types.ObjectId
})

const purchase=new mongoose.model('Purchase',purchaseSchema);

module.exports=purchase;