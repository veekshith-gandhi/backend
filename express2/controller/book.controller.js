const fs = require("fs");
const path = require("path");

const getBookById = (req, res) => {
  const file = fs.readFile(
    path.join(__dirname, "..", "db.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send(err);
      }
      const db = JSON.parse(data);
      const book = db.find((each) => each.id == req.params.id);
      if (book) {
        res.status(200).json({ book });
      } else {
        res.status(404).json({ message: "NOT FOUND" });
      }
    }
  );
};

const addBook = (req, res) => {
  const payload = req.body;
  console.log(payload);
  if (
    !payload?.author_name ||
    !payload?.book_name ||
    !payload?.pages ||
    !payload?.publish_year
  ) {
    return res.status(422).json({ message: "ENTER - DETAILS" });
  }

  const file = fs.readFile(
    path.join(__dirname, "..", "db.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send(err);
      }
      const db = JSON.parse(data);
      const book = { ...payload, id: db[db?.length - 1].id + 1 };
      const newBooks = [...db, book];

      fs.writeFile(
        path.join(__dirname, "..", "db.json"),
        JSON.stringify(newBooks),
        (err, data) => {
          if (err) {
            return res.send(err);
          }
          res.send({
            books: newBooks,
            request_time: req.request_time,
            responsetime: Date.now(),
          });
        }
      );
    }
  );
};

const deletBook = (req, res) => {
  const file = fs.readFile(
    path.join(__dirname, "..", "db.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send(err);
      }
      console.log(file);
      const db = JSON.parse(data);
      const book = db.filter((each) => each.id != req.params.id);

      fs.writeFile(
        path.join(__dirname, "..", "db.json"),
        JSON.stringify(book),
        (err, data) => {
          if (err) {
            return res.send(err);
          }
          res.send(book);
        }
      );
      // if (book) {
      //   res.status(200).json({ book });
      // } else {
      //   res.status(404).json({ message: "NOT FOUND" });
      // }
    }
  );
};

const editBook = (req, res) => {
  const payload = req.body;
  console.log(payload);
  const file = fs.readFile(
    path.join(__dirname, "..", "db.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send(err);
      }
      const db = JSON.parse(data);
      const book = db.find((each) => each.id == req.params.id);
      const result = book.map((ele) => ({ ...ele, payload }));
      console.log(result);

      // const newBooks = { ...book, payload };

      fs.writeFile(
        path.join(__dirname, "..", "db.json"),
        JSON.stringify(newBooks),
        (err, data) => {
          if (err) {
            return res.send(err);
          }
          res.send(newBooks);
        }
      );
    }
  );
};
module.exports = { getBookById, addBook, deletBook, editBook };
