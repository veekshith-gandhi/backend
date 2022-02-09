const express = require("express");
const userController = require("./controller/user.controller");
const booksController = require("./controller/book.controller");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
  console.log("middleware", req.url);
  next();
});
app.use((req, res, next) => {
  req.request_time = Date.now();
  next();
});

app.get("/", userController.getuser);
app.get("/book/:id", booksController.getBookById);
app.post("/book", booksController.addBook);
app.delete("/book/:id", booksController.deletBook);
app.patch("/book/:id", booksController.editBook);

app.listen(port, () => {
  console.log("listing...");
});
