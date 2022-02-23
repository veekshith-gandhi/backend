/** @format */

const mongoose = require("mongoose");
//password protection
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, require: true },
    googleId: { type: String },
    isGoogle: { type: Boolean },
    name: { type: String },
    avatar: { type: String },
    roles: [{ type: String }],
  },
  { timestamps: true }
);
//pre hook save before u execute
//salt is used internaly its adding salth + hash value
UserSchema.pre("save", function (next) {
  if (!this.password) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});
// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// // };
// comparing password by decrypting hash value
UserSchema.methods.comparePassword = function (password) {
  const hashedPassword = this.password;
  return bcrypt.compare(password, hashedPassword);
};

const Users = mongoose.model("users", UserSchema);

module.exports = Users;
