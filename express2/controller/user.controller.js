const fs = require("fs");
const path = require("path");

const getuser = (req, res) => {
  const file = fs.readFile(
    path.join(__dirname, "..", "db.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send(err);
      }
      const db = JSON.parse(data);
      const users = db.map((each) => ({ user: each.author_name, id: each.id }));
      console.log(file);
      res.status(200).json({ users });
    }
  );
};

module.exports = { getuser };
