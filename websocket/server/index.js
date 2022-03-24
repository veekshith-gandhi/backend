/** @format */

const { Server } = require("socket.io");

const io = new Server(8080, {
  cors: {
    origin: "*",
  },
});
let count = 0;
let users = {};

io.on("connection", (socket) => {
  socket.emit("event_name", "WEBSOCKET-Data");
  console.log("connected", socket.id, `${++count} no of count`);

  socket.on("user_login", (name) => {
    console.log(name, "logged in ");
    users[socket.id] = name;
    io.emit("users_in_room", users);
  });

  socket.on("user_message", (data) => {
    console.log(data);
    io.emit("sending_message_to_client", data);
  });

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id, `${--count}   count`);
    delete users[socket.id];
  });
});
