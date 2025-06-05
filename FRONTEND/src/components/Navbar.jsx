import React from "react";
import { assets } from "../assets/assets";
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-auto overflow-hidden">
      {/* Background Image */}
      <img
        onClick={() => navigate("/")}
        src={assets.background_image1}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
        alt="Background Image"
      />

      {/* Navbar Content */}
      <div className="flex justify-between items-center py-3 mx-8 sm:mx-20 xl:mx-32 relative z-10">
        {/* Logo & Title Section */}
        <div className="flex items-center gap-2 p-2">
          <h1 className="text-lg font-extrabold text-gray-800">
            Excel Analytics Platform
          </h1>
          <img
            src={assets.analytics_logo}
            className="w-14 sm:w-20 rounded-xl"
            alt="Analytics Logo"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="flex shadow-xl shadow-slate-600 items-center gap-2 font-bold rounded-full text-xl cursor-pointer bg-gradient-to-r from-slate-500 via-gray-400 to-slate-200 text-white px-10 py-2.5 active:bg-slate-950 active:scale-90 duration-300 ease-in-out"
        >
          Login 
          <IoMdLogIn size={30} className="text-slate-950"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
