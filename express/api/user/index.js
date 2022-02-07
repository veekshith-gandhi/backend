const Users = require("../static/index");
const uuid = require("uuid");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("helloo users...");
  res.json(Users);
});

router.get("/:id", (req, res) => {
  //   res.send(`${req.params.id} : ${req.url}`);
  //   console.log("user id");
  const user = Users.find((user) => user.id === req.params.id);
  if (!user) {
    res.status(400).send("invalid ID");
  }
  res.status(200).json(user);
});

router.post("/", (req, res) => {
  try {
    const { name, active } = req.body;
    if (!name) throw new Error("Name required");
    if (!active) throw new Error("active required");
    const user = {
      id: uuid.v4(),
      name,
      active,
    };
    Users.push(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(401).send("invalid" + err);
  }
});

module.exports = router;
