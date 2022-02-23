/** @format */

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (id) => {
  return jwt.sign(
    {
      id: id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
};

const login = async (req, res) => {
  let user;
  try {
    //checking the email
    user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ message: "user not existed" });
  } catch (error) {
    res.status(200).json({ status: "failure", message: error });
  }
  // console.log("user",user)
  let isMatch;
  try {
    //checking the password
    //filtered user
    isMatch = await user.comparePassword(req.body.password);
    if (!isMatch)
      return res.status(401).json({ message: "invalid email or password" });
  } catch (error) {
    res.status(200).json({ status: "failure", message: error });
  }
  const token = generateToken(user);
  return res.status(200).json({
    id: user._id,
    email: user.email,
    token,
  });
};

const registerUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_photo_url: req.body.profile_photo_url,
      roles: req.body.roles,
    });
    if (!user) return res.status(404).json({ message: "users not found" });

    const token = await generateToken(user._id);

    return res.status(200).json({
      status: "success",
      data: {
        id: user._id,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    // console.log(error);
    return res
      .status(200)
      .json({ status: "something went wrong", message: error?.message });
  }
};

module.exports = { registerUser, login };
