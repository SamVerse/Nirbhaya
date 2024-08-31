import React from 'react';

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between px-6 p-4 bg-white shadow-md">
      <h2 className="text-base font-semibold pl">Chat with the Officals </h2>
      <div className="flex space-x-2">
        <button  className="px-3 py-1 text-white bg-red-500 rounded-full">Emergency</button>
        {/* <button className="px-3 py-1 text-white bg-blue-500 rounded-full">Police</button> */}
          
      </div>
    </div>
  );
};

export default ChatHeader;
