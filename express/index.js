const express = require("express");
const usersRouter = require("./api/user/index");
const myLogger = require("./middleware/logger");
const cors = require("cors");

//invoke the function to create instence of application
const app = express();
const port = 5000;

app.use(myLogger);
app.use(express.json());
app.use("/users", usersRouter);
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("helloo world...");
});

app.listen(port, () => {
  console.log("listing.......");
});
