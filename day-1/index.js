const sum = require("./sum.js");
const { getAllUsers, getUser, addUsers } = require("./api/index");

//sum
console.log(sum(5, 6));

const http = require("http");

const server = http.createServer((req, res) => {
  try {
    const [url, query] = req.url.split("?");
    if (url === "/users") {
      if (req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(getAllUsers()));
      } else if (req.method == "POST") {
        const [name, value] = query.split("=");
        addUsers(value);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(getAllUsers()));
      }
    } else if (url.startsWith("/user/")) {
      const index = Number(req.url.split("/")[2]);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(getUser(index)));
    } else {
      throw new Error("did not understand query");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Error ," + err.message,
      })
    );
  }
});

server.listen(3001, () => {
  console.log("listining port 3001");
});
