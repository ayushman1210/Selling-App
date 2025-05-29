const express=require('express');
const dotenv=require('dotenv');
const db=require('././db/db')
const userrouter=require('./routes/user')
const courserouter=require('./routes/course')
const adminroute=require('./routes/admin')
dotenv.config();
const app=express();
port=process.env.PORT;



app.use("/user",userrouter);
app.use("/admin",adminroute);
app.use('/course',courserouter);


app.listen(port,async()=>{
    console.log("hello",port);
    await db(process.env.MONGO_URI);
    console.log(`db connected ${process.env.MONGO_URI}`,)
})

