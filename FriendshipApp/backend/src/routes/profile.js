const express = require("express");
const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");
const {validateEditprofile } = require("../utils/validation.js")

profileRouter.get("/profile/view", userAuth, async (req, res) => {
 
  try {
    const user = req.user;
    res.send(user);
  } catch (error) {
    res.status(404).send("Error resolve now" + error);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
   if(!validateEditprofile(req)){
    throw new Error("please resolve edit functionlity here")
  }
  const loggedInUser = req.user;
  Object.keys(req.body).forEach((key)=>loggedInUser[key]= req.body[key]);
  await loggedInUser.save()
  res.json({message: `${loggedInUser.name}, wants to edit the profile`, data:loggedInUser});

   
   
  } catch (error) {
    res.status(404).send("Error resolve now"+ " " + error.message);
  }
});

module.exports = profileRouter;