const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minLength:3,
        maxLength:51,
        trim:true,

},
    email:{
     type:String,
     required:true,
     unique:true
    },
    passWord:{
        type:String
    },
    age:{
        type:Number,
        min:18,
        max:99
    },
    gender:{
        type:String,
        
    },
    about:{
        type:String,
        default:" I can do anyhting with love of God"
    },
    skills:{
        type:[String]
    }
    
})

// const User = mongoose.model("User", userSchema);
// module.exports = User

module.exports = mongoose.model("User", userSchema);