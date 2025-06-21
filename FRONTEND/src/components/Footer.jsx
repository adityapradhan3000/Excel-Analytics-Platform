import React from "react";
import { assets } from "../assets/assets";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-white">
      {/* Footer Content */}
      <div className="flex flex-row items-start justify-between py-8 border-b border-gray-500/50">
        {/* Left Section: Logo & Branding */}
        <div className="flex flex-col items-start w-full lg:w-1/3">
          <div className="flex items-center gap-4">
            <img
              src={assets.excel_analytics_logo}
              className="w-16 sm:w-20 rounded-lg shadow-md"
              alt="Logo"
            />
            <h2 className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
              Excel Analytics Platform
            </h2>
          </div>

          {/* Platform Description */}
          <p className="max-w-md mt-4 text-slate-950 font-bold leading-relaxed">
            Upload your Excel sheets effortlessly and transform raw data into
            meaningful insights using dynamic visualizations. Our platform
            enables you to generate interactive charts, analyze patterns, and
            explore relationships within your data in a clear and intuitive
            format. Additionally, harness the power of 3D models to gain a
            deeper understanding of trends, making complex information more
            accessible and actionable for informed decision-making.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-9">
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
            onClick={() => navigate("/contact")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-orange-900 
           text-slate-50 hover:scale-105 active:scale-95 
            transition-all duration-200 ease-in-out"
          >
            <p className="text-lg font-bold">Privacy Policy</p>
            <MdPrivacyTip size={20}/>
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="flex items-center gap-3 px-4 py-2 rounded-lg shadow-xl shadow-orange-900 
           text-slate-50 hover:scale-105 active:scale-95 
            transition-all duration-200 ease-in-out"
          >
            <p className="text-lg font-bold">Terms & Services</p>
            <IoTerminal size={20}/>
          </button>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex flex-col gap-4 items-center">
          <p className="mb-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
            Connect us with Social Media
          </p>
          <div className="flex flex-col gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-3 animate-bounce rounded-lg items-center gap-3 shadow-xl shadow-pink-600 cursor-pointer transition-transform duration-200 active:scale-95"
            >
              <FaInstagramSquare size={40} className="text-pink-600" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 font-semibold text-lg">
                Instagram
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex animate-bounce items-center p-3 rounded-lg gap-3 shadow-xl shadow-green-600 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <FaSquareWhatsapp size={40} className="text-green-600" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 font-semibold text-lg">
                WhatsApp
              </span>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex animate-bounce items-center p-3 rounded-lg shadow-xl shadow-blue-600 gap-3 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <FaSquareXTwitter size={40} className="text-blue-600" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 font-semibold text-lg">
                Twitter
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="text-center py-4 text-sm md:text-base text-gray-900 font-semibold">
        © 2025 Excel Analytics Platform - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
