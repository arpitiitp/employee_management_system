const express=require('express');
const Employees=require("../model/employee.js");


const router = express.Router();


router.get("/", async(req, res) => {
    try {
        const response = await Employees.find()
        console.log(response);
        res.json(response)
    } catch (error) {
        res.status(500).send(`Error adding employee: ${error.message}`);
    }
});

module.exports=router;