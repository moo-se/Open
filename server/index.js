const express = require("express");
const dotenv = require("dotenv").config();
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const baseRoute = require("./router.js");

app.use(baseRoute);

io.on("connection", (socket) => {
  console.log("User just connected!!");

  socket.on("disconnect", () => {
    console.log("User disconnected!!");
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
