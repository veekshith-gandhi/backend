/** @format */

const express = require("express");
const connect = require("./config/db");
const app = express();
require("dotenv").config();

const userRouter = require("./routes/user.router");
const lectureRouter = require("./routes/lecture.router");
const studentRouter = require("./routes/student.router");

app.use(express.json());
app.use("/users", userRouter);
app.use("/lecture", lectureRouter);
app.use("/student", studentRouter);

const start = async () => {
  await connect();
  app.listen(process.env.PORT, () => {
    console.log(`listeing to port ${process.env.PORT}`);
  });
};
module.exports = start;
