const express=require('express');
const Employees=require('../model/employee.js');


const router = express.Router();


router.delete("/:id", async(req, res) => {
    try {
        const employee = await Employees.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send("Employee not found!");
        }
        res.status(200).send("Employee deleted!");
    } catch (error) {
        console.error(error);
    }
});


module.exports=router;