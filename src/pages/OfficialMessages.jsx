import React, { useState, useEffect } from 'react';
import { FaHome, FaComments, FaSignOutAlt, FaRegCommentDots } from 'react-icons/fa';

const OfficialMessages = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    const fetchNotifications = async () => {
      try {
        const response = await fetch('https://your-backend-api.com/notifications');
        const data = await response.json();
        setNotifications(data); // Assume the data is an array of notification objects
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleChatClick = (name) => {
    window.location.href = "https://example.com/chat?user=${name}";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      <div className="p-4 text-center bg-white shadow-md">
        <h2 className="text-lg font-bold">Notifications</h2>
      </div>

      <div className="flex-grow p-4">
        {notifications.map(notification => (
          <div key={notification.id} className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center relative">
            <div className="bg-gray-200 rounded-full w-12 h-12 mr-4"></div>
            <div className="flex-grow">
              <h3 className="font-semibold">{notification.name}</h3>
              <p className="text-sm text-gray-600">{notification.time}</p>
              <p className="text-sm text-gray-500 font-bold">{notification.details}</p>
            </div>
            <FaRegCommentDots
              className="absolute right-4 top-[50%] transform translate-y-[-50%] text-gray-600 hover:text-black cursor-pointer"
              size={32}
              onClick={() => handleChatClick(notification.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialMessages;