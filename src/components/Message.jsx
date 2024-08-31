import React from 'react';

const Message = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`p-3 rounded-lg max-w-xs ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
        {message.text}
        <div className="mt-1 text-xs text-right text-gray-400">{message.timestamp}</div>
      </div>
    </div>
  );
};

export default Message;
