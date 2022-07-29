const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET, POST"],
  },
});
const cors = require("cors");

app.use(cors());

io.on("connection", (socket) => {
  console.log(`connection: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`disconnection: ${socket.id}`);
  });
});

// io.on("connection", (socket) => {
//   socket.on("chat message", (msg) => {
//     console.log("message: " + msg);
//   });
// });

// io.on("connection", (socket) => {
//   socket.emit("hi");
// });

// io.on("connection", (socket) => {
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });
// });

server.listen(3001, () => {
  console.log("listening on *:3001");
});
