/** @format */

const express = require("express");
const connect = require("./config/db");
const app = express();
require("dotenv").config();

const start = async () => {
  await connect();
  app.listen(process.env.PORT, () => {
    console.log(`listeing to port ${process.env.PORT}`);
  });
};
module.exports = start;
