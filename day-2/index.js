const http = require("http");
const https = require("https");

const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    handleHomePage(req, res);
  }
  if (req.url == "/user/1" && req.method == "GET") {
    handleUserPage(req, res, 1);
  }
  if (req.url == "/user/2" && req.method == "GET") {
    handleUserPage(req, res, 2);
  }
});

const handleUserPage = (req, res, id) => {
  fs.readFile(
    path.join(__dirname, "template", "user.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
      }
      let template = data;
      console.log("temp", template);
      https.get("https://reqres.in/api/users/" + id, (httpResponse) => {
        // console.log(httpResponse.statusCode);
        let data = "";
        httpResponse.on("data", (chunk) => {
          data += chunk;
        });
        httpResponse.on("end", () => {
          let response = JSON.parse(data);
          //   console.log(response);
          const options = {
            avatar: response.data.avatar,
            name: response.data.first_name + response.data.last_name,
            email: response.data.email,
          };
          for (let key in options) {
            const value = options[key];
            template = template.replace(`{${key}}`, value);
            // console.log(key, options[key]);
          }
          res.writeHead(200);
          res.end(template);
        });
      });
    }
  );
};

const handleHomePage = (req, res) => {
  fs.readFile(
    path.join(__dirname, "template", "index.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.log(err);
      }
      let template = data;
      const options = {
        title: "home Page",
        name: "veekshith",
        message: "hello gandhi",
      };

      for (let key in options) {
        const value = options[key];
        template = template.replace(`{${key}}`, value);
        // console.log(key, options[key]);
      }
      console.log(template);
      res.writeHead(200);
      res.end(template);
    }
  );
};

server.listen("4000", (err) => {
  if (err) {
    console.log(err);
  }
});
