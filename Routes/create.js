const express=require('express');
const employee=require('./../model/employee.js');

const router =express.Router();

router.post('/',async (req,res)=>{
   try {
    const data=req.body;
    const newemployee=new employee(data);
    const response=await newemployee.save();
    console.log("New Employee Succesfully Added");
    res.status(200).json(response);
    
   } catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal Server Error"});
   }
});
module.exports=router;