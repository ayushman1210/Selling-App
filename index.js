const express=require('express');
const dotenv=require('dotenv');
const db=require('././db/db')
dotenv.config();
const app=express();
port=process.env.PORT;

app.listen(port,async()=>{
    console.log("hello",port);
    await db(process.env.MONGO_URI);
    console.log(`db connected ${process.env.MONGO_URI}`,)
})

