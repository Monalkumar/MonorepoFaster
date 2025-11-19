const express = require("express");
const authRouter = express.Router()

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

module.exports=authRouter;