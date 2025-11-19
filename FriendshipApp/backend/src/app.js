const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { usersValidations } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {userAuth} = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

// User Signup APis logic things

;

// create login apis and store in databse in mongoose

app.post("/login", async (req, res) => {
  try {
    const { email, passWord } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("please check email");
    }
    const isPasswordValid = await bcrypt.compare(passWord, user.passWord);

    if (isPasswordValid) {
      const token = await user.getJWT()
      res.cookie("token", token);
      res.send("login successfully");
    } else {
      throw new Error("pleas check crendemtials");
    }
  } catch (error) {
    res.status(404).send("Error:" + error.message);
  }
});

// Profile Apis Logics

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(404).send("Error resolve now" + error);
  }
});

app.post("/chatapp",userAuth,(req,res)=>{
  const user = req.user
  res.send(user.name,"creating succesfully")
})

// Get User from the database
// for finding all the datas from the databse

app.get("/feeds", async (req, res) => {
  try {
    const user = req.body.email;
    const userEmail = await User.find({ email: user });
    if (!userEmail) {
      res.status(404).send("please check and resolve yar");
    }
    res.status(200).json({
      message: "user get successfully",
      useremail: userEmail,
    });
  } catch (error) {
    res.status(500).json({
      message: "please resolve this",
      error: error.message,
    });
  }
});

// delte users from the database

app.delete("/dele", async (req, res) => {
  try {
    const user = req.body._id;
    const dele = await User.findByIdAndDelete(user);
    res.status(200).send("please resolve yar");
    if (!dele) {
      res.status(401).json({ message: "resolve yar" });
    }
  } catch (error) {
    res.status(500).json({
      mssage: "resolve error",
      error: "rsolve this" + error.message,
    });
  }
});

// update uers from the database

app.patch("/update", async (req, res) => {
  try {
    const users = req.body;
    const ALLOWED_UPDATES = [
      "_id",
      "name",
      "age",
      "skills",
      "gender",
      "photoUrl",
    ];
    const isUpdated = Object.keys(users).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdated) {
      throw new Error("please check updates value yar");
    }
    const updateUser = await User.findByIdAndUpdate(users._id, users, {
      new: true,
    });
    if (!updateUser) {
      res.status(404).send("please rsolve yar");
    }
    res.status(200).json({
      message: "users updated successfully",
      updateUsers: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "please check the error and resolve",
      error: "error:" + error.message,
    });
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(5000, () => {
      console.log("Backend is working fast and smooth on port 5000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err); // print actual error
  });
