const validator = require("validator");

const usersValidations = (req) => {
  const { name, email, passWord } = req.body;
  if (!name) {
    throw new Error("please write your name here");
  } else if (!validator.isEmail(email)) {
    {
      throw new Error("please validate email");
    }
  } else if (!validator.isStrongPassword(passWord)) {
    {
      throw new Error("please write strong password for security");
    }
  }
};

module.exports = { usersValidations };
