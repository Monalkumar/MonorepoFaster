const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String
    },
    emailId:{
        type:String
    },
    company:{
        type:String
    },
    age:{

        type:Number
    },
    userName:{
        type:String
    }
})

 module.exports = mongoose.model("User",userSchema);