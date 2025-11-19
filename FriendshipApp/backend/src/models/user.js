const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 51,
      trim: true,    
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("please validate email");
        }
      },
    },
    passWord: {
      type: String,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("please validate email");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
      max: 99,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("plase write gender");
        }
      },
    },
    about: {
      type: String,
      default: " I can do anyhting with love of God",
    },
    skills: {
      type: [String],
    },
    photoUrl: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function(){
  const user = this;
  const token = await jwt.sign({_id:user._id}, "welcome@54321");
  return token;

}


// const User = mongoose.model("User", userSchema);
// module.exports = User

module.exports = mongoose.model("User", userSchema);



