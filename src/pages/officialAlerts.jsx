import React from 'react';

const OfficialAlerts = () => {
  // Sample data for alerts
  const alerts = [
    {
      name: 'Jahnvi',
      time: '12:30 PM',
      date: '2024-09-01',
      type: 'Emergency signal received',
      image: 'image_placeholder.png',
    },
    {
      name: 'Aarchi',
      time: '1:45 PM',
      date: '2024-09-01',
      type: 'Emergency response',
      image: 'image_placeholder.png',
    },
  ];

  return (
    <div className="p-4 max-w-md mx-auto min-h-screen flex flex-col bg-white">
      <header className="flex justify-between items-center py-4 bg-white rounded-md relative">
        <button className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 transition duration-300" aria-label="Go Back">
          <i className="fas fa-arrow-left text-xl"></i>
        </button>
        <h1 className="text-xl font-bold text-gray-800 text-center flex-1">Alerts</h1>
        <button className="text-gray-600 hover:text-gray-800 transition duration-300" aria-label="Settings">
          <i className="fas fa-cog text-xl"></i>
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 bg-white">
        {/* Emergency triggered section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Emergency triggered</h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="bg-red-600 p-3 rounded-full">
                    <i className="fas fa-heart text-white text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-800 font-semibold">{alert.name}</h3>
                    <p className="text-sm text-gray-600">{alert.type}</p>
                    <p className="text-xs text-gray-500">{alert.time} | {alert.date}</p>
                  </div>
                </div>
                <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300" aria-label="Respond">
                  Respond
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency history section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Emergency history</h2>
          <div className="space-y-4">
            {/* History item */}
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-gray-600 p-3 rounded-full">
                  <i className="fas fa-shield-alt text-white text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-800 font-semibold">Police</h3>
                  <p className="text-sm text-gray-600">Emergency response</p>
                  <p className="text-xs text-gray-500">2:00 PM | 2024-08-31</p>
                </div>
              </div>
              
            </div>
            {/* More history items... */}
          </div>
        </section>

        {/* Emergency status section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Emergency status</h2>
          <div className="space-y-4">
            {/* Status item */}
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-full">
                  <i className="fas fa-heartbeat text-white text-lg"></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-800 font-semibold">Akshara</h3>
                  <p className="text-sm text-gray-600">Emergency support offered</p>
                  <p className="text-xs text-gray-500">3:15 PM | 2024-08-30</p>
                </div>
              </div>
              
            </div>
            {/* More status items... */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default OfficialAlerts;