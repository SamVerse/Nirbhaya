const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Enable Cross-Origin Requests from Frontend
app.use(cors({
  origin: "http://localhost:3000", // Adjust based on your frontend URL
  methods: ["GET", "POST"]
}));

// Create a new Socket.io instance
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Adjust based on your frontend URL
    methods: ["GET", "POST"]
  }
});

// Placeholder for connected users (victims and police)
let users = [];

// Handle new socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle user joining chat
  socket.on('joinChat', (userType) => {
    users.push({ id: socket.id, type: userType });
    // console.log(${userType} joined the chat with ID: ${socket.id});
  });

  // Handle sending and broadcasting messages
  socket.on('sendMessage', (message) => {
    // Emit the received message to all connected clients
    io.emit('receiveMessage', message);
    // console.log(Message from ${message.isUser ? 'User' : 'Police'}: ${message.text});
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    users = users.filter(user => user.id !== socket.id);
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
server.listen(5000, () => {
  console.log('Server is running on port 5000');
});