import React, { useState, useEffect } from "react";

const RedAlertMode = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0); // Start from 0 seconds

  useEffect(() => {
    const timer = setInterval(
      () => setElapsedTime((prevTime) => prevTime + 1),
      1000
    );

    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

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
      window.location.href = "/user";
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
        body: JSON.stringify({
          time: `${Math.floor(elapsedTime / 60)}:${
            elapsedTime % 60 < 10 ? `0${elapsedTime % 60}` : elapsedTime % 60
          } min`,
        }),
      });
      console.log("Time completed and sent to the backend");
    } catch (error) {
      console.error("Failed to send the completed time", error);
    }
  };

  return (
    <div className="bg-red-600 h-screen">
      <h1 className="text-3xl font-bold text-white text-center p-8">
        RED ALERT MODE
      </h1>
      <div className="flex flex-col px-8 items-center mt-[80px] justify-center text-white">
        <p className="text-center mb-6">
          Police and emergency contacts have been notified. Please take
          immediate precautions.
          <br />
          <strong>HELP IS ON THE WAY. !!</strong>
        </p>
        <button
          onClick={handleContactEmergency}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-6"
        >
          Contact your Priority Emergency Contact
        </button>
        <div className="mb-4 mt-8">
          <label className="block mb-2 text-center">
            Enter your phone number to reset back to the default mode:
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              let value = e.target.value;

              // Ensure the input always starts with "+91"
              if (!value.startsWith("+91")) {
                value = "+91" + value.replace(/^\+91/, "");
              }

              // Allow input only if it matches the "+91" prefix followed by up to 10 digits
              if (/^\+91\d{0,10}$/.test(value)) {
                setPhoneNumber(value);
              }
            }}
            className="w-full p-2 rounded-lg text-black"
            placeholder="+91XXXXXXXXXX"
            maxLength={13}
            pattern="\+91\d{10}"
            required
          />
        </div>
        <button
          onClick={handleResetMode}
          className="bg-black w-full text-white py-2 px-6 rounded-xl"
        >
          Submit
        </button>
        <p className="mt-14 text-xl flex-col flex items-center">
          Time elapsed:
          <div>
            {Math.floor(elapsedTime / 60)}:
            {elapsedTime % 60 < 10 ? `0${elapsedTime % 60}` : elapsedTime % 60}
          </div>
        </p>
      </div>
    </div>
  );
};

export default RedAlertMode;
