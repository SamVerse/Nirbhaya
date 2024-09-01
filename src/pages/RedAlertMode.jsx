import React, { useState, useEffect } from "react";

const RedAlertMode = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timeLeft, setTimeLeft] = useState(90); // 1:30 min in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Logic to send the completed time to the backend
      handleTimeComplete();
    }
  }, [timeLeft]);

  const handleContactEmergency = async () => {
    try {
      const response = await fetch("/api/getEmergencyContact");
      const { contactNumber } = await response.json();
      // Logic to contact the emergency number
      alert(`Contacting emergency number: ${contactNumber}`);
    } catch (error) {
      console.error("Failed to contact emergency number", error);
    }
  };

  const handleResetMode = () => {
    if (phoneNumber) {
      // Logic to reset to green mode and navigate to home
      console.log("Resetting to green mode");
      window.location.href = "/";
    } else {
      alert("Please enter your phone number to reset the mode.");
    }
  };

  const handleTimeComplete = async () => {
    try {
      // Send the completed time to the backend
      await fetch("/api/sendCompletedTime", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ time: "1:30 min" }),
      });
      console.log("Time completed and sent to the backend");
    } catch (error) {
      console.error("Failed to send the completed time", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-600 text-white">
      <h1 className="text-3xl font-bold mb-4">RED ALERT MODE</h1>
      <p className="text-center mb-6">
        Police and emergency contacts have been notified. Please take immediate precautions.
        <br />
        <strong>HELP IS ON THE WAY. !!</strong>
      </p>
      <button
        onClick={handleContactEmergency}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-6"
      >
        Contact your Priority Emergency Contact
      </button>
      <div className="mb-4">
        <label className="block mb-2">Enter your phone number to reset back to the default mode:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-2 rounded-lg text-black"
          placeholder="Enter phone number"
        />
      </div>
      <button
        onClick={handleResetMode}
        className="bg-black text-white py-2 px-4 rounded-lg"
      >
        Submit
      </button>
      <p className="mt-6 text-xl">{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60} min</p>
    </div>
  );
};

export default RedAlertMode;
