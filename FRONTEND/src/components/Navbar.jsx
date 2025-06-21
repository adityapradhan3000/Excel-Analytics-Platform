import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaInfoCircle } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdFeaturedPlayList } from "react-icons/md";
import { BiSolidLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 h-auto overflow-hidden shadow-md">
      <div className="flex m-5 flex-row justify-between items-center">
        <div className="flex flex-row gap-6 items-center">
          {/* Logo */}
          <img
            onClick={() => navigate("/home")}
            src={assets.excel_analytics_logo}
            alt="Blog Logo"
            className="h-24 w-24 rounded-lg cursor-pointer"
          />

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/about")}
              className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-orange-900 
             text-slate-50 hover:scale-105 active:scale-95 
             transition-all duration-200 ease-in-out"
            >
              <p className="text-lg font-bold">About</p>
              <FaInfoCircle size={20} />
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-orange-900 
             text-slate-50 hover:scale-105 active:scale-95 
             transition-all duration-200 ease-in-out"
            >
              <p className="text-lg font-bold">Contact</p>
              <IoCallSharp size={20} />
            </button>

            <button
              onClick={() => navigate("/feature")}
              className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-orange-900 
             text-slate-50 hover:scale-105 active:scale-95 
             transition-all duration-200 ease-in-out"
            >
              <p className="text-lg font-bold">Features</p>
              <MdFeaturedPlayList size={20} />
            </button>
          </div>
        </div>

        <div className="flex gap-5 flex-row justify-between items-center">
          <button
            onClick={() => navigate("/hero")}
            className="animate-bounce mt-3 shadow-xl bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 shadow-orange-900 rounded-full p-3 active:scale-90 duration-200 transition-all"
          >
            <p className="font-bold">GET STARTED</p>
          </button>

          <button
            onClick={() => navigate("/")}
            className="animate-pulse flex items-center gap-3 px-6 py-2 rounded-full shadow-xl shadow-slate-800 
              bg-gradient-to-r from-red-200 via-red-300 to-red-400 hover:scale-105 
              active:scale-95 transition-all duration-200 ease-in-out cursor-pointer"
          >
            <p className="text-lg font-bold">Logout</p>
            <BiSolidLogInCircle size={30} />
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
    </div>
  );
};

export default Navbar;
