const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // const cookies = req.cookies;
    const { token } = req.cookies;
    if (!token) {
      throw new Error("token is not working please check and resolve");
    }

    const decodedObj = await jwt.verify(token, "welcome@54321");
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("please check the credentials yar");
    }
      req.user = user
    next();
  } catch (error) {
    res.status(404).send("please resolve");
  }
};


module.exports = { userAuth };
