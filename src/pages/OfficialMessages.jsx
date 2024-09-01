import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const OfficialMessages = () => {
  const [messages, setMessages] = useState([
    { text: "Hey everyone! We've activated the red alert for immediate police assistance.", time: "Now", isOfficial: true },
    { text: "Stay vigilant!", time: "Now", isOfficial: true },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        text: inputMessage,
        time: "Now",
        isOfficial: false
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Simulate receiving a response after 1 second
      setTimeout(() => {
        receiveMessage("Message received. Thanks for your input.");
      }, 1000);
    }
  };

  const receiveMessage = (text) => {
    const newMessage = {
      text: text,
      time: "Now",
      isOfficial: true
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-100">
    <div className="bg-white p-4 flex items-center justify-between shadow">
      <div className="flex items-center">
        <AlertCircle className="w-6 h-6 mr-2" />
        <h1 className="text-lg font-semibold">Chat with the Officials</h1>
      </div>
      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">Emergency</span>
    </div>
    
    <div className="flex-grow overflow-y-auto p-4">
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`rounded-lg p-3 mb-2 shadow ${
            message.isOfficial ? 'bg-white' : 'bg-blue-100 ml-auto'
          }`}
        >
          <p>{message.text}</p>
          <span className="text-xs text-gray-500">{message.time}</span>
        </div>
      ))}
    </div>
    
    <div className="bg-white p-4 flex items-center">
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        className="flex-grow p-2 border rounded-l-lg focus:outline-none"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
      >
        Send
      </button>
    </div>
  </div>
  )
};

export default OfficialMessages;