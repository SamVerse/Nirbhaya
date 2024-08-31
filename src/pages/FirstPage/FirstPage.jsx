import React from "react";
import { Link } from "react-router-dom";

export const FirstPage = () => {
  return (
    <div className="bg-white h-[100vh] flex flex-col items-center justify-center">
      {/* Logo and Description */}
      <div className="text-center flex flex-col mb-12">
        <div className="flex items-center justify-center">
          {/* <img src={Logo} className="w-[90px] h-[200px]" alt="Logo" /> */}
          <h1 className="text-4xl font-bold text-red-500 ">Nirbhaya</h1>
        </div>

        <p className="text-sm text-gray-500 mt-2 w-[300px] ">
          Your Guardian in Every Step. Together, We Make Safety a Priority.
        </p>
      </div>

      <div className="flex flex-col gap-5 pb-8">
        <Link to="/user">
          <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-md w-48 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
            Proceed as Citizen
          </button>
        </Link>
        <Link>
          <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-md w-48 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
            Proceed as Official
          </button>
        </Link>
      </div>

      {/* Emergency Button */}
      <div className="flex flex-col gap-2 pt-8 items-center justify-center">
        <div> IN DANGER? </div>
        <button className="bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg w-56 animate-pulse hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-110">
          Emergency Alert
        </button>
        <div className="underline text-sm text-wrap text-red-800 font-semibold">
          (Only choose this option in case of danger! )
        </div>
      </div>
      <div className="pt-10 underline ">
        <div className="flex justify-between w-full gap-[100px]">
          <a
            className="text-blue-500 rounded-xl hover:scale-110 text-[15px]"
            href="#"
          >
            How it works?
          </a>
          <a
            className="text-blue-500 rounded-xl hover:scale-110 text-[15px]"
            href="#"
          >
            About us
          </a>
        </div>
      </div>
    </div>
  );
};
