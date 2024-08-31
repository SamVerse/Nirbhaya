import React from "react";
import { Link } from "react-router-dom";
import settings from "../assets/settings.svg";
import logout from "../assets/logout.svg";
import notification from "../assets/notification.svg";
import chat from "../assets/chat.svg";
import home from "../assets/home.svg";

const BottomBar = ({ handleLogout }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 border-t-2 bg-white flex justify-around items-center">
      <Link to="/user" className="text-gray-500 hover:text-black">
        <img className="h-10" src={home} alt="notification" />
      </Link>
        <Link to="/user/notifications" className="text-gray-500 hover:text-black">
          <img className="h-10" src={notification} alt="notification" />
        </Link>
      <Link to="/user/officialchat" className="text-gray-500 hover:text-black">
        <img className="h-12" src={chat} alt="chat" />
      </Link>
      <Link to="/user/settings" className="text-gray-500 hover:text-black">
        <img className="h-[55px]" src={settings} alt="settings" />
      </Link>
      <Link to="/" className="text-gray-500 hover:text-black">
        <img onClick={handleLogout} className="h-10" src={logout} alt="logout" />
      </Link>
    </div>
  );
};

export default BottomBar;
