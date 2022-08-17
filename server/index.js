require("dotenv").config();
const mongoose = require("mongoose");

const user = process.env.USER_URI;
const pass = process.env.PASSWORD_URI;
const mongoDB = `mongodb+srv://${user}:${pass}@smackchatcluster.nocqqel.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);

const { Server } = require("socket.io");

const cors = require("cors");

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET, POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`connection: ${socket.id}`);
  socket.on("join_room", (room) => {
    console.log(`join_room: ${room}`);
    socket.join(room);
  });

  socket.on("leave_room", (room) => {
    console.log(`leave_room: ${room}`);
    socket.leave(room);
  });

  socket.on("send_message", (message) => {
    console.log(`send_message: ${message.text}`);
    socket.to(message.room).emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log(`disconnection: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
