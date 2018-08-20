const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
//tracking all users
var users = new Array();
var rooms = new Array();
var userRooms = new Array();

io.on("connection", socket => {
  console.log("client connected.");
  socket.on('Login', payload => {
    users.push(payload);
    socket.broadcast.emit('NewUser', payload);
    socket.emit('LoadRooms', rooms);
    socket.emit('LoadUsers', {users: users, userRooms: userRooms});
    console.log('LoadUsers');
    console.log(users);
    console.log('LoadRooms');
    console.log(rooms);
    console.log('LoadUserRooms');
    console.log(userRooms);
  });
  socket.on('NewRoom', payload => {
  	socket.broadcast.emit('NewRoom', payload);
    socket.join(payload.id);
    rooms.push(payload);
  	console.log('NewRoom');
    console.log(payload);
  });
  socket.on('JoinedRoom', roomData => socket.join(roomData.roomId, () => {
  	socket.to(roomData.roomId).emit('NewUserRoom', roomData);
    userRooms.push(roomData);
    socket.emit('LoadUsers', {users: users, userRooms: userRooms});
    console.log('UserRooms');
    console.log(userRooms);
  	console.log('JoinedRoom');
    console.log(roomData);
  }));
  socket.on('UserRoomData', payload => userRooms.push(payload));
  socket.on('Message', payload => {
  	console.log('NewMessage');
  	console.log(payload);
  	socket.to(payload.roomId).emit('NewMessage', payload);
  });
  socket.on('UserLeaveRoom', payload => {
    socket.to(payload.roomId).emit('UserLeaveRoom', payload);
    //remove all user id
    userRooms = userRooms.filter(({ userId }) => userId !== payload.userId);
    console.log('UserRooms');
    console.log(userRooms);
  });
  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));