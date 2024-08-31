import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-4 bg-white border-t border-gray-200">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-full"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
