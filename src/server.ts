import express from 'express';

const app=express()
 
const PORT:number = 3000;

app.get('/ping',(req,res)=>{
    res.send("pong");
})

app.listen(PORT,()=>{
    console.log(`server running at ${PORT} `);
});