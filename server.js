const express=require('express');
const app=express();
const bodyParser = require('body-parser');
require('dotenv').config();
const db=require('./db.js');

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hi!!\n Welcome to Employee Management Portal");
});

const createemployee=require("./Routes/create.js");// create employee
app.use("/create",createemployee);

const searchemployee=require("./Routes/search_firstname.js");// search employee by firstname
app.use("/search",searchemployee);

const deleteemployee=require("./Routes/delete.js");// delete employee by id
app.use("/delete", deleteemployee);

const getemployee=require("./Routes/get.js");// get employee details
app.use("/get",getemployee);

const getemployeeById=require("./Routes/getbyid.js");// get employee by their id
app.use("/getById",getemployeeById);

const updateById=require("./Routes/update.js");//update employee details by their Id
app.use("/updateById",updateById);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is connected to ${port}`);
});


