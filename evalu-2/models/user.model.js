/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  profile_phot_url: { type: String },
  roles: { type: String },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
