const express = require("express");
const connectDB=require("./config/database")
const app = express();
const User = require("./models/user")

app.post("/signup",(req,res)=>{
    
    // creating new instances of the userModel
    const user = new User({
        name:"johny",
        email:"jhony@gmail.com",
        passWord:"12345",
        age:97,
        gender:"maleandfemale"
    })
    try{
    user.save();
    res.send("workig perfect")
    }
    catch(err){
        res.status(401).send("please reslolve err",err.message)
    }
    
})

connectDB()
.then(()=>{
console.log("database is connected succfully thanks");
app.listen(5000,()=>{
    console.log("backend is working fast and smooth")
})
}).catch((err)=>{
    consle.log('error pleas  resolve')
})

