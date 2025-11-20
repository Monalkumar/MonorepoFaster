const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");
const requestRouter = require("./routes/requests.js");

app.use(express.json());
app.use(cookieParser());
app.use("/",authRouter );
app.use("/",profileRouter );
app.use("/",requestRouter );



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
