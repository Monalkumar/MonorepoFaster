const express = require("express");
const app = express();

app.use("/pages",(req,res)=>{
    res.send("working")
})

app.listen(5000,()=>{
    console.log("server is working very fine")
})