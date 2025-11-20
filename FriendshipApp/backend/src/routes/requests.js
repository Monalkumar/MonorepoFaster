const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("../middlewares/auth");

requestRouter.post("/sendConnectionRequest", userAuth, (req,res)=>{
    const user = req.user;
    console.log("sending connection requests");

    res.send(user.name + "send the connections requests")

})

module.exports = requestRouter;