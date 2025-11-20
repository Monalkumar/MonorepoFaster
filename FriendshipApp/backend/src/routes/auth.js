const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { usersValidations } = require("../utils/validation");


authRouter.post("/signup", async (req, res) => {
  usersValidations(req);
  try {
    const { name, email, passWord } = req.body;
    const hashPassword = await bcrypt.hash(passWord, 10);
    const user = new User({ name, email, passWord: hashPassword });
    const savedUser = await user.save();
    res.status(200).send({ message: "data added successfully", savedUser });
  } catch (err) {
    throw new Error("error messagee");
  }
})

authRouter.post("/login", async (req, res) => {
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

authRouter.post("/logout",(req,res)=>{
    res.cookie("token", null)
    res.send("logout successfully")
})

module.exports=authRouter;