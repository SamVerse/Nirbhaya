const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Allow cross-origin requests
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Frontend URL (adjust accordingly)
    methods: ["GET", "POST"]
  }
});

let users = []; // Store connected users

io.on('connection', (socket) => {
  console.log('A user connected: ', socket.id);

  // Handle joining chat
  socket.on('joinChat', (userType) => {
    users.push({ id: socket.id, type: userType });
    // console.log(${userType} joined the chat.);
  });

  // Handle sending message
  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message); // Broadcast the message to everyone
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    users = users.filter(user => user.id !== socket.id);
    console.log('A user disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});