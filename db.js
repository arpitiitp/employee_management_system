const mongoose=require('mongoose');

//setting url
const mongourl=
mongoose.connect(mongourl);

const db=mongoose.connection;
//Listners
db.on("connected",()=>{
    console.log("Connected to mongodb server!");
});

db.on("error",(err)=>{
    console.error("Error Occured!",err);
});

db.on("disconnected",()=>{
    console.log("Disconnected to db Server!");
});

//export to server file
module.exports= db ; 