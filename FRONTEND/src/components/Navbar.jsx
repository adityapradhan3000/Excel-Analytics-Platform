import React from "react";
import { assets } from "../assets/assets";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-auto overflow-hidden bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 shadow-md">
      {/* Navbar Content */}
      <div className="flex justify-between items-center py-4 px-6 sm:px-16 xl:px-24">
        {/* Logo & Title Section */}
        <div className="flex items-center gap-3">
          <img
            src={assets.analytics_logo}
            className="w-16 sm:w-20 rounded-lg shadow-lg"
            alt="Analytics Logo"
          />
          <h1 className="text-2xl font-extrabold rounded-lg p-3 text-slate-800 shadow-xl shadow-blue-800 bg- tracking-wide">
            Excel Analytics Platform
          </h1>
        </div>

        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 font-extrabold text-lg sm:text-xl rounded-full px-6 py-3 transition duration-300 ease-in-out bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600 text-white shadow-xl shadow-blue-700 hover:shadow-2xl hover:bg-gray-800 active:scale-95"
        >
          LOGIN
          <IoMdLogIn size={30} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
