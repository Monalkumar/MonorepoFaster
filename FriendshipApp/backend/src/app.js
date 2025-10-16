const express = require("express");
const connectDB=require("./config/database")
const app = express();
const User = require("./models/user")


app.use(express.json())

// app.post("/signup",(req,res)=>{
    
    // creating new instances of the userModel
    // Manual way to send data to database
//     const user = new User({
        // name:"johnyy",
//         email:"jhony@gmail.com",
//         passWord:"12345",
//         age:97,
//         gender:"maleandfemale"
//     })
    // try{
    // user.save();
    // res.send("workig perfect")
    // }
    // catch(err){
    //     res.status(401).send("please reslolve err",err.message)
    // }
    
// })

app.post("/signup",async(req,res)=>{
   try {
    console.log(req.body);
     // Create a new user from request body
    const user = new User(req.body);
    // Save to MongoDB
    await user.save();
    // Send success response
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
    
})

connectDB()
.then(()=>{
console.log("database is connected succfully thanks");
app.listen(5000,()=>{
    console.log("backend is working fast and smooth")
})
}).catch((err)=>{
    console.log('error pleas  resolve')
})

