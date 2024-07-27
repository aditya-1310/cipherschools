const express = require("express");
const app = express();

app.get("/",(req,res)=>{
  res.send("This is some response from your first Node.js server")
})

app.get("/add", (req, res)=>{
  let{a: firstNumber,b:SecondNumber} = req.query;
  let sum = parseInt(firstNumber) + parseInt(SecondNumber);
  res.send({sum});
}) 

app.listen(8080, ()=>{
  console.log("Sever is running");
})