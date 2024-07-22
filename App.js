const express = require("express");
let cors = require("cors");
const mongoose = require("mongoose");
const Routes = require("./API/Routes/Routes");
const USER_MODEL = require("./API/Models/user.module");

const app = express();
app.use(express.json());
app.use("/", Routes);

const url =
  "mongodb+srv://next-react-course_server:codezone_server@cluster0.0waqbd5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);
mongoose.connection.on("connected", () => {
  console.log("mongoose connected");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB conection error");
});
app.get("/App", (req, res) => {
  res.status(200).json({ message: "every thing is set" });
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await USER_MODEL.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: true, errorMessage: e.message });
  }
});

module.exports = app;
