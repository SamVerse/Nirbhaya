import React, { useState } from 'react';
import { ChevronLeft, Save, Plus, Minus, Home, Search, PlusCircle, MessageCircle, User } from 'lucide-react';

const App = () => {
  const [name, setName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [phoneNumbers, setPhoneNumbers] = useState(['+91']);

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, '+91']);
  };

  const handleRemovePhoneNumber = (index) => {
    const newPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
    setPhoneNumbers(newPhoneNumbers);
  };

  const handlePhoneNumberChange = (index, value) => {
    // Remove any non-digit characters, including the existing "+91" if present
    let cleanedValue = value.replace(/\D/g, '');
    
    // If the cleaned value is longer than 10 digits, trim it
    if (cleanedValue.length > 13) {
      cleanedValue = cleanedValue.slice(0, 10);
    }
  
    // Add the "+91" prefix only if it's not already there
    const formattedValue = cleanedValue.startsWith('91') 
      ? `+${cleanedValue}`
      : `+91${cleanedValue}`;
  
    const newPhoneNumbers = phoneNumbers.map((number, i) => 
      (i === index ? formattedValue : number)
    );
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleSave = () => {
    const allValid = phoneNumbers.every(number => number.length === 13);
    if (allValid) {
      alert('Emergency Contact Saved');
    } else {
      alert('Please ensure all phone numbers are exactly 10 digits long (excluding +91).');
    }
  };

  const handleProfilePhotoChange = (e) => {
    if (e.target.files.length > 0) {
      setProfilePhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white p-4 shadow-md flex items-center">
        <ChevronLeft className="w-6 h-6 text-gray-500 cursor-pointer" onClick={() => window.history.back()} />
        <h1 className="text-xl font-bold text-center flex-1">Edit Your Profile</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white p-6 w-full max-w-md mx-auto rounded-lg shadow-lg">
          <div className="flex flex-col items-center mb-6">
            <label className="block text-gray-700 mb-2">Profile Photo</label>
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-3">
              {profilePhoto ? (
                <img src={profilePhoto} alt="Profile" className="w-full h-full rounded-full object-cover" />
              ) : (
                <span className="text-gray-500">No Photo</span>
              )}
            </div>
            <button
              onClick={() => document.getElementById('file-input').click()}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Change Photo
            </button>
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="hidden"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Edit Emergency Numbers</label>
            {phoneNumbers.map((phone, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={`Phone number ${index + 1}`}
                />
                {phoneNumbers.length > 1 && (
                  <Minus
                    className="w-6 h-6 text-red-500 ml-2 cursor-pointer"
                    onClick={() => handleRemovePhoneNumber(index)}
                  />
                )}
              </div>
            ))}
            <button
              className="flex items-center text-blue-500 mt-2"
              onClick={handleAddPhoneNumber}
            >
              <Plus className="w-6 h-6 mr-1" /> Add Another Number
            </button>
          </div>
          <button 
            className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
            onClick={handleSave}
          >
            <Save className="inline-block w-5 h-5 mr-2" /> Save
          </button>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-4 border-t">
        <Home 
          className="text-gray-400 cursor-pointer" 
          onClick={() => alert('Home Clicked')} 
        />
        <Search 
          className="text-gray-400 cursor-pointer" 
          onClick={() => alert('Search Clicked')} 
        />
        <PlusCircle 
          className="text-gray-400 cursor-pointer" 
          onClick={() => alert('Add Clicked')} 
        />
        <MessageCircle 
          className="text-gray-400 cursor-pointer" 
          onClick={() => alert('Messages Clicked')} 
        />
        <User 
          className="text-gray-400 cursor-pointer" 
          onClick={() => alert('Profile Clicked')} 
        />
      </footer>
    </div>
  );
};

export default App;