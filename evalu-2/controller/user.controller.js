/** @format */

const User = require("../models/user.model");

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_photo_url: req.body.profile_photo_url,
      roles: req.body.roles,
    });
    if (!user) return res.status(404).json({ message: "users not found" });

    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(200)
      .json({ status: "something went wrong", message: error });
  }
};

module.exports = { registerUser };
