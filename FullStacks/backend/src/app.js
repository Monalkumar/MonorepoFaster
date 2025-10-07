// src/App.js
const express = require("express");
const connectDB = require("../config/database")
const app = express();
const User =require("./models/user")


app.post("/signup", async (req,res)=>{
    const user = new User({
        firstName:"Monal",
        emailId:"monal@gmail.com",
        company:"Google",
        age:"97",
        userName:"monal12345"
    })
    
    
   await user.save();
   res.send("API created successfully")
})


connectDB()
.then(()=>{
    console.log("database successfully connected")
    app.listen(3000,()=>{
    console.log("Server is running successfully on port 3000")
})
})
.catch(()=>{
    console.log("please resolve the connection establishment")
})