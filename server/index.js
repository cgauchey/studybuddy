const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
// const app = http.Server(app);
const startListening = () => {
  const server = app.listen(3000, () => console.log("listening on *:3000"));
  const io = socketio(server);
  require("./sockets")(io);
};

startListening();

// const server = app.listen(1337, function() {
//   console.log(`Listening on http://localhost:${server.address().port}`);
// });

const clients = {};
const user = {};
const classroomId = 1;

// The event will be called when a client is connected.
// io.on("connection", socket => {
//   console.log("A client just joined on", socket.id);
// });

// io.on("connection", socket => {
//   clients[socket.id] = socket;
//   socket.on("userJoined", userId => onUserJoined(userId, socket));
// });

// io.on("connection", socket => {
//   console.log(`A socket connection to the server has been made: ${socket.id}`);

//   socket.on("disconnect", () => {
//     console.log(`Connection ${socket.id} has left the building`);
//   });
// });
