/** @format */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  profile_phot_url: { type: String },
  roles: { type: String },
});
UserSchema.pre("save", function (next) {
  if (!this.password) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

UserSchema.methods.comparePassword = function (password) {
  const hashedPassword = this.password;
  return bcrypt.compare(password, hashedPassword);
};

const Users = mongoose.model("users", UserSchema);

const User = mongoose.model("users", userSchema);

module.exports = User;
