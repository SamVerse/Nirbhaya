// import React, { useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { FaArrowLeft, FaEllipsisV, FaPaperPlane } from 'react-icons/fa';

// const ChatPage = () => {
//   const { personName } = useParams(); // Retrieve the person's name from the URL
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const history = useHistory();

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, { text: newMessage, sender: 'You' }]);
//       setNewMessage(''); // Clear the input field after sending
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Header */}
//       <div className="flex items-center justify-between bg-white p-4 shadow-md">
//         <button onClick={() => history.goBack()} className="text-gray-600 hover:text-black">
//           <FaArrowLeft size={24} />
//         </button>
//         <h2 className="text-lg font-bold">{personName}</h2>
//         <button className="text-gray-600 hover:text-black">
//           <FaEllipsisV size={24} />
//         </button>
//       </div>

//      {/* Message List */}
// <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
//   {messages.map((message, index) => (
//     <div 
//       key={index} 
//       className={`mb-2 p-2 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}
//     >
//       <span 
//         className={`inline-block p-2 rounded-lg ${
//           message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
//         }`}
//       >
//         {message.text}
//       </span>
//     </div>
//   ))}
// </div>

// {/* Message Input */}
// <div className="p-4 bg-white flex items-center shadow-md">
//   <input
//     type="text"
//     value={newMessage}
//     onChange={(e) => setNewMessage(e.target.value)}
//     className="flex-grow p-2 border rounded-lg mr-2"
//     placeholder="Type a message..."
//   />
//   <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-lg">
//     <FaPaperPlane size={24} />
//   </button>
// </div>

// export default ChatPage;