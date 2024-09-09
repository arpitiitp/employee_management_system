const mongoose=require('mongoose');

const person=new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    dateOfJoining: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // required: true,
    }
},
 { timestamps: true });

 module.exports=mongoose.model("employee",person);
