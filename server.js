const express=require('express');
const app=express();
const bodyParser = require('body-parser');
require('dotenv').config();
const db=require('./db.js');

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hi!!\n Welcome to Employee Management Portal");
});

const port=process.env.PORT || 3000;
 app.listen(port,()=>{
    console.log("Server id connected to ${PORT}");
 });

