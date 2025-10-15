const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

console.log("✅ Loaded Mongo URL:", process.env.MONGO_URI);
console.log("✅ Loaded PORT:", process.env.PORT);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.log("❌ MongoDB Error:", err);
  }
};

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.get("/api/addTest", async (req, res) => {
  try {
    const Test = mongoose.model("Test", new mongoose.Schema({ name: String }));
    const doc = await Test.create({ name: "Hello everyone" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
