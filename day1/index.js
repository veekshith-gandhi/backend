const sum = require("./sum.js");

console.log(sum(5, 6));

const http = require("http");

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "hello world",
      })
    );
  } catch (error) {
    console.log(error);
  }
});

server.listen(3001, () => {
  console.log("listining port 3001");
});
