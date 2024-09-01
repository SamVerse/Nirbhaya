import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Search, PlusCircle, MessageCircle, User, Info } from 'lucide-react';
import BottomBar from '../../components/BottomBar';

const SettingsItem = ({ icon, text, hasChevron = true, onClick }) => (
  <div
    className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer transition-colors"
    onClick={onClick}
  >
    <div className="flex items-center">
      {icon}
      <span className="ml-3 text-gray-700">{text}</span>
    </div>
    {hasChevron && <ChevronRight className="text-gray-400" />}
  </div>
);

const InfoItem = ({ icon, text }) => (
  <div className="flex items-center p-3 hover:bg-white-100 cursor-pointer transition-colors">
    <div className="flex items-center">
      {icon}
      <span className="ml-3 text-gray-700">{text}</span>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white-100 flex flex-col justify-center">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Settings</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white p-6 max-w-md w-full rounded-lg">
          <Link to='/userprofile'> 
          <SettingsItem 
            icon={<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">PM</div>}
            text="Priya mishra"
          />
          </Link>
          
         
          
          <SettingsItem 
            icon={<span className="w-8">🌐</span>} 
            text="Language" 
            onClick={() => alert('Language Settings Clicked')}
          />
          
          
          <SettingsItem 
            icon={<span className="w-8">⚙</span>} 
            text="App Settings" 
            onClick={() => alert('App Settings Clicked')}
          />
          
          <SettingsItem 
            icon={<span className="w-8">❓</span>} 
            text="Help & Support" 
            onClick={() => alert('Help & Support Clicked')}
          />
          
          <button 
            className="w-full bg-red-100 text-red-500 py-3 rounded-lg mt-4 hover:bg-red-200 transition-colors"
            onClick={() => alert('Log out Clicked')}
          >
            Log out
          </button>
        </div>
      </main>
      <BottomBar/>
    </div>
  );
};

export default App;