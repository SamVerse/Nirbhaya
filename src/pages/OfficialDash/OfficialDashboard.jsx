import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageSquare, LogOut } from 'lucide-react';

const alerts = [
  { id: 1, name: 'Riya mishra', date: '2023-10-01', time: '14:32:00', type: 'red', location: { lat: 40.7128, lng: -74.0060 } },
  { id: 2, name: 'Priya', date: '2023-10-01', time: '13:15:00', type: 'red', location: { lat: 40.7282, lng: -73.7949 } },
  { id: 3, name: 'Tripti', date: '2023-10-01', time: '12:45:00', type: 'red', location: { lat: 40.7589, lng: -73.9851 } },
  // Add more alerts as needed, including yellow alerts
];

const AlertBox = ({ alert, onClick }) => (
  <button 
    onClick={() => onClick(alert)} 
    className="w-full bg-red-100 p-4 rounded-lg mb-4 text-left"
  >
    <div className="font-bold">{alert.name}</div>
    <div className="text-sm text-gray-600">{`${alert.date} ${alert.time}`}</div>
    <div className="mt-2">
      <MapPin className="inline mr-2" size={16} />
      <span className="text-sm">Map placeholder</span>
    </div>
  </button>
);

const DetailedView = ({ alert, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">{alert.name}</h2>
      <p>Phone: +1234567890</p>
      <p>Gender: Female</p>
      <div className="mt-4 h-64 bg-gray-200 flex items-center justify-center">
        {/* This would be replaced with an actual map component */}
        <span>Detailed map view placeholder</span>
      </div>
      <button 
        onClick={onClose}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </div>
);

const BottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
    <Link to="/" className="flex flex-col items-center">
      <MapPin />
      <span className="text-xs">Home</span>
    </Link>
    <Link to="/messages" className="flex flex-col items-center">
      <MessageSquare />
      <span className="text-xs">Messages</span>
    </Link>
    <Link to="/logout" className="flex flex-col items-center">
      <LogOut />
      <span className="text-xs">Logout</span>
    </Link>
  </div>
);

const PoliceDashboard = () => {
  const [activeTab, setActiveTab] = useState('red');
  const [selectedAlert, setSelectedAlert] = useState(null);

  const filteredAlerts = alerts.filter(alert => alert.type === activeTab);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-center w-full">
            <span className="font-bold mt-4 ml-6 text-red-500 text-[25px]">Nirbhaya</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 mt-[55px]">Police Dashboard</h1>
        
        <div className="flex mb-4">
          <button
            onClick={() => setActiveTab('red')}
            className={`flex-1 py-2 px-4 rounded-l-lg ${activeTab === 'red' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          >
            Red alerts
          </button>
          <button
            onClick={() => setActiveTab('yellow')}
            className={`flex-1 py-2 px-4 rounded-r-lg ${activeTab === 'yellow' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
          >
            Yellow Alerts
          </button>
        </div>
        
        <div>
          {filteredAlerts.map(alert => (
            <AlertBox key={alert.id} alert={alert} onClick={setSelectedAlert} />
          ))}
        </div>
      </div>

      <BottomBar />

      {selectedAlert && (
        <DetailedView alert={selectedAlert} onClose={() => setSelectedAlert(null)} />
      )}
    </div>
  );
};

export default PoliceDashboard;