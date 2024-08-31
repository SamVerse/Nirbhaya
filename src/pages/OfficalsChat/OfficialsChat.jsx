import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import ChatHeader from '../../components/ChatHeader';
import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';
import BottomBar from '../../components/BottomBar';

const socket = io('http://localhost:5174'); // Backend URL

const OfficalsChat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hey everyone! We’ve activated the red alert for immediate police assistance.', timestamp: 'Now', isUser: false },
    { text: 'Keep up the good work!', timestamp: 'Now', isUser: false },
    { text: 'Stay vigilant!', timestamp: 'Now', isUser: false },
  ]);

  useEffect(() => {
    socket.emit('joinChat', 'police'); // Identifying the user as police

    // Listen for incoming messages
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handleSendMessage = (message) => {
    const newMessage = { text: message, timestamp: 'Now', isUser: true };
    socket.emit('sendMessage', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader />
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((message, index) => (
          <Message key={index} message={message} isUser={message.isUser} />
        ))}
      </div>
      <div className="mb-16"> {/* This margin will ensure the input field is above the bottom bar */}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
      <BottomBar />
    </div>
  );
};

export default OfficalsChat;