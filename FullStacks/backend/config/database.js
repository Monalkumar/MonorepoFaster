const mongoose = require("mongoose");

const connectDB = async ()=>{
await mongoose.connect("mongodb+srv://Shivamonal:zZNQNqsOt9SjeiMh@shivamonal.keyql.mongodb.net/auths");

}
module.exports=connectDB;
