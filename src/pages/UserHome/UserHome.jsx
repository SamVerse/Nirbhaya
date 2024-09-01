import React,{useState , useEffect} from "react";
import settings from "../../assets/settings.svg";
import logout from "../../assets/logout.svg";
import notification from "../../assets/notification.svg";
import chat from "../../assets/chat.svg";
import danger from "../../assets/danger.svg";
import warning from "../../assets/warning.svg";
import { Link, Navigate } from "react-router-dom";
import BottomBar from "../../components/BottomBar";


const Toggle = ({ checked, onChange }) => (
  <button
    className={`w-14 h-8 flex items-center rounded-full p-1 ${
      checked ? 'bg-green-500' : 'bg-gray-300'
    }`}
    onClick={() => onChange(!checked)}
  >
    <div
      className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
        checked ? 'translate-x-6' : ''
      }`}
    />
  </button>
);

const CustomDialog = ({ isOpen, onClose, onYes, onNo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Safety Check</h2>
        <p className="mb-6">Are you feeling safe?</p>
        <div className="flex justify-end space-x-4">
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={onYes}
          >
            Yes
          </button>
          <button 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onNo}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export const UserHome = () => {
  const [alertMode, setAlertMode] = useState("safe");
  const [isBackendActive, setIsBackendActive] = useState(true);
  const [showSafetyCheck, setShowSafetyCheck] = useState(false);
  const [safetyCheckTimer, setSafetyCheckTimer] = useState(null);
  const [yellowAlertTimer, setYellowAlertTimer] = useState(null);

  const alertText = {
    safe: "You are currently in safe mode!!",
    yellow: "You are currently in yellow alert mode!",
    red: "You are currently in red alert mode! This indicates immediate danger. OFFICIALS ARE NOTIFIED. Please take necessary precautions.",
  };

  const alertColor = {
    safe: "text-[#18DB18]",
    yellow: "text-yellow-500",
    red: "text-[#DB2626]",
  };

  const handleAlertClick = (newMode) => {
    if (isBackendActive) {
      setAlertMode(newMode);
      // Backend function call would go here
      console.log(`Backend: Setting alert mode to ${newMode}`);
    }
  };

  const handleToggle = (checked) => {
    setIsBackendActive(checked);
    if (checked) {
      console.log("Backend activated");
      startSafetyCheckTimer();
    } else {
      console.log("Backend deactivated");
      clearSafetyCheckTimer();
    }
  };

  const startSafetyCheckTimer = () => {
    const timer = setTimeout(() => {
      setShowSafetyCheck(true);
      startYellowAlertTimer();
    }, 15 * 60 * 1000); // 15 minutes
    setSafetyCheckTimer(timer);
  };

  const startYellowAlertTimer = () => {
    const timer = setTimeout(() => {
      if (alertMode !== "safe") {
        setAlertMode("yellow");
        startRedAlertTimer();
      }
    }, 3 * 60 * 1000); // 3 minutes
    setYellowAlertTimer(timer);
  };

  const startRedAlertTimer = () => {
    setTimeout(() => {
      if (alertMode !== "safe") {
        setAlertMode("red");
        // Trigger red alert function
        console.log("Red alert triggered!");
      }
    }, 3 * 60 * 1000); // Another 3 minutes
  };

  const clearSafetyCheckTimer = () => {
    if (safetyCheckTimer) clearTimeout(safetyCheckTimer);
    if (yellowAlertTimer) clearTimeout(yellowAlertTimer);
  };

  const handleSafetyCheck = (isSafe) => {
    setShowSafetyCheck(false);
    if (isSafe) {
      setAlertMode("safe");
      startSafetyCheckTimer();
    } else {
      setAlertMode("yellow");
      startRedAlertTimer();
    }
  };

  useEffect(() => {
    if (isBackendActive) {
      startSafetyCheckTimer();
    }
    return () => clearSafetyCheckTimer();
  }, [isBackendActive]);

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logged out successfully");
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-end p-4">
        <div className="flex items-center">
          <Toggle checked={isBackendActive} onChange={handleToggle} />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="logo flex items-center justify-center p-4 mt-8 ">
          <div className="text-[40px] font-[600] text-red-500">Nirbhaya</div>
        </div>
        <div className="text-[30px] px-6 mt-8 font-semibold text-center">Rescue at your fingertips!!</div>
        <div className="text-base text-center px-6 w-[400px] flex-wrap text-gray-600 font-medium">
          In case of an emergency, press the appropriate button below to alert
          the necessary authorities and receive immediate assistance.
        </div>
      </div>
      <div className={`flex text-center underline items-center font-semibold justify-center mt-[40px] text-[17px] px-3 ${alertColor[alertMode]}`}>
        {alertText[alertMode]}
      </div>
      <div className="flex flex-col items-center mt-[40px] text-white font-medium justify-center gap-5">
        <button
          className={`cursor-pointer flex gap-3 items-center justify-center p-3 text-[20px] bg-[#18DB18] rounded-3xl px-4  ${
            alertMode === "safe" ? "active" : ""
          }`}
          onClick={() => handleAlertClick("safe")}
          disabled={!isBackendActive}
        >
          <span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0L0 4.8V14.544C0 22.624 6.82 30.16 16 32C25.18 30.16 32 22.624 32 14.544V4.8L16 0ZM23.94 19.856C20.26 23.328 13.52 23.216 10.02 19.744C5.64 15.392 8.72 8.992 15.4 8.016C16.08 7.92 16.66 8.448 16.42 8.976C15.5 10.944 15.64 13.2 17.06 15.152C18.48 17.104 20.84 18.336 23.42 18.672C24.1 18.752 24.4 19.424 23.94 19.856Z"
                fill="white"
              />
            </svg>
          </span>
          Green Alert - Safe Check-in
        </button>
        <button
          className={`cursor-pointer p-3 text-[20px] flex gap-3 items-center justify-center bg-yellow-500 rounded-3xl px-4  ${
            alertMode === "yellow" ? "active" : ""
          }`}
          onClick={() => handleAlertClick("yellow")}
          disabled={!isBackendActive}
        >
          <span>
            <img className="h-[44px]" src={warning} alt="warning" />
          </span>
          Yellow Alert - Suspicious Activity
        </button>
        <Link to='/user/redalert'>
          <button
            className={`cursor-pointer p-3 text-[20px] flex gap-3 items-center justify-center bg-[#DB2626] rounded-3xl px-4  ${
              alertMode === "red" ? "active" : ""
            }`}
            onClick={() => handleAlertClick("red")}
            disabled={!isBackendActive}
          >
            <span>
              <img className="h-12 text-white " src={danger} alt="danger" />
            </span>
            Red Alert - Immediate Danger
          </button>
        </Link>
      </div>

      <BottomBar handleLogout={handleLogout} />

      <CustomDialog 
        isOpen={showSafetyCheck}
        onClose={() => setShowSafetyCheck(false)}
        onYes={() => handleSafetyCheck(true)}
        onNo={() => handleSafetyCheck(false)}
      />
    </div>
  );
};