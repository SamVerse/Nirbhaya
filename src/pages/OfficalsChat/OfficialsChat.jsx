import React, { useState } from 'react';
import ChatHeader from '../../components/ChatHeader';
import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';

const OfficalsChat = () => {
  const [messages, setMessages] = useState([
    { text: 'Hey everyone! We’ve activated the red alert for immediate police assistance.', timestamp: 'Now', isUser: false },
    { text: 'Keep up the good work!', timestamp: 'Now', isUser: false },
    { text: 'Stay vigilant!', timestamp: 'Now', isUser: false },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, timestamp: 'Now', isUser: true }]);
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

export default OfficalsChat;
