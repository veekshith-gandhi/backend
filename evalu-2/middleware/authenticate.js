/** @format */

const jwt = require("jsonwebtoken");
const User = require("../models/auth.model");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);

      return resolve(decoded);
    });
  });
  // const decoded = jwt.verify(token, process.env.SECRET_KEY);
  // return decoded
};

const authenticate = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer && bearer.startsWith("Bearer "))
      return res.status(401).json({ message: "token not existed" });

    const token = bearer.split(" ")[1].trim();

    const tokenDecode = await verifyToken(token);

    if (!tokenDecode) return res.status(401).json({ message: "invalid token" });

    const user = await User.findById(tokenDecode._id);
    if (!user)
      return res
        .status(401)
        .json({ status: "failure", message: "user doesn't exist" });

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: "something went wrong" });
  }
};

module.exports = authenticate;
