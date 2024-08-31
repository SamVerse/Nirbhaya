import React from "react";
import police from "../assets/police.png";

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between px-6 p-4 bg-white shadow-md">
      <div className="flex items-center justify-center gap-4">
        <img className="w-5" src={police} alt="official" />
        <h2 className="text-[18px] font-semibold pl">Chat with the Officals </h2>
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-white bg-red-500 rounded-full">
          Emergency
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
