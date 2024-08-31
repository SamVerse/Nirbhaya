import React,{useState} from "react";
import settings from "../../assets/settings.svg";
import logout from "../../assets/logout.svg";
import notification from "../../assets/notification.svg";
import chat from "../../assets/chat.svg";
import danger from "../../assets/danger.svg";
import warning from "../../assets/warning.svg";

export const UserHome = () => {
  const [alertMode, setAlertMode] = useState("safe"); // Initial state for alert mode

  const handleAlertClick = (newMode) => {
    setAlertMode(newMode);
  };

  const alertText = {
    safe: "You are currently in safe mode!!",
    yellow: "You are currently in yellow alert mode!",
    red: "You are currently in red alert mode! This indicates immediate danger. OFFICIALS ARE NOTIFIED.   Please take necessary precautions.",
  };

  const alertColor = {
    safe: "text-[#18DB18]",
    yellow: "text-yellow-500",
    red: "text-[#DB2626]",
  };

  return (
    <div className="bg-white h-screen">
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
          className={`cursor-pointer flex gap-3 items-center justify-center p-3 text-[20px] bg-[#18DB18] rounded-3xl px-4 hover:scale-110 ${
            alertMode === "safe" ? "active" : ""
          }`}
          onClick={() => handleAlertClick("safe")}
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
          className={`cursor-pointer p-3 text-[20px] flex gap-3 items-center justify-center bg-yellow-500 rounded-3xl px-4 hover:scale-110 ${
            alertMode === "yellow" ? "active" : ""
          }`}
          onClick={() => handleAlertClick("yellow")}
        >
          <span>
            <img className="h-[44px]" src={warning} alt="warning" />
          </span>
          Yellow Alert - Suspicious Activity
        </button>
        <button
          className={`cursor-pointer p-3 text-[20px] flex gap-3 items-center justify-center bg-[#DB2626] rounded-3xl px-4 hover:scale-110 ${
            alertMode === "red" ? "active" : ""
          }`}
          onClick={() => handleAlertClick("red")}
        >
          <span>
            <img className="h-12 text-white " src={danger} alt="danger" />
          </span>
          Red Alert - Immediate Danger
        </button>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-16 border-t-2 bg-white flex justify-around items-center">
        <a href="/" className="text-gray-500 hover:text-black">
          <img className="h-10" src={notification} alt="notification" />
        </a>
        <a href="/" className="text-gray-500 hover:text-black">
          <img className="h-12" src={chat} alt="chat" />
        </a>
        <a href="/" className="text-gray-500 hover:text-black">
          <img className="h-[55px]" src={settings} alt="settings" />
        </a>
        <a href="/" className="text-gray-500 hover:text-black">
          <img className="h-10" src={logout} alt="logout" />
        </a>
      </div>
    </div>
  );
};
