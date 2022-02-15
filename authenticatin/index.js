const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.listen(port, () => {
    console.log("listing... 5000");
  });
  