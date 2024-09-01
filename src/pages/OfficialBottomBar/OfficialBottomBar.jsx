import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MessageSquare, Bell, Settings, LogOut } from 'lucide-react';

const OfficialBottomBar = () => {
  const navItems = [
    { to: '/official', icon: Home, label: 'Dashboard' },
    { to: '/official/alerts', icon: Bell, label: 'Alerts' },
    { to: '/official/messages', icon: MessageSquare, label: 'Messages' },
    { to: '/official/settings', icon: Settings, label: 'Settings' },
    { to: '/official/logout', icon: LogOut, label: 'Logout' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? 'text-blue-500' : 'text-gray-500'
              }`
            }
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default OfficialBottomBar;