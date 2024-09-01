import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import ChatHeader from '../components/ChatHeader';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

// Initialize the Socket.io client connection
const socket = io('http://localhost:5000'); // Replace with your backend URL if deployed elsewhere

const OfficalsUserChat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hey everyone! We’ve activated the red alert for immediate police assistance.', timestamp: 'Now', isUser: false },
    { text: 'Keep up the good work!', timestamp: 'Now', isUser: false },
    { text: 'Stay vigilant!', timestamp: 'Now', isUser: false },
  ]);

  // Setup socket connection and event listeners
  useEffect(() => {
    // Join the chat as police
    socket.emit('joinChat', 'user');

    // Listen for incoming messages
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the event listener on component unmount
    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  // Handle sending a new message
  const handleSendMessage = (message) => {
    const newMessage = { text: message, timestamp: 'Now', isUser: true }; // Police sending a message
    socket.emit('sendMessage', newMessage); // Send message to backend via socket
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Update local state to display the new message
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader />
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((message, index) => (
          <Message key={index} message={message} isUser={message.isUser} />
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default OfficalsUserChat;