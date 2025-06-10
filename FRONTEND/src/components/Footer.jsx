import React from "react";
import { assets } from "../assets/assets";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-pink-300 via-violet-300 to-cyan-300 text-white">
      {/* Footer Content */}
      <div className="flex flex-wrap items-start justify-between gap-10 py-8 border-b border-gray-500/50">
        {/* Left Section: Logo & Branding */}
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <div className="flex items-center gap-4">
            <img
              src={assets.analytics_logo}
              className="w-16 sm:w-20 rounded-lg shadow-md"
              alt="Logo"
            />
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800">
              Excel Analytics Platform
            </h2>
          </div>

          {/* Platform Description */}
          <p className="max-w-md mt-4 text-gray-800 font-medium leading-relaxed">
            Upload your Excel sheets effortlessly and transform raw data into meaningful insights using dynamic visualizations. Our platform enables you to generate interactive charts, analyze patterns, and explore relationships within your data in a clear and intuitive format. Additionally, harness the power of 3D models to gain a deeper understanding of trends, making complex information more accessible and actionable for informed decision-making. 
          </p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex flex-col gap-4 items-start">
          <p className="text-lg font-bold text-gray-900 shadow-md p-2 rounded-lg shadow-gray-500">
            Connect with us
          </p>

          <div className="flex flex-col gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-3 rounded-lg items-center gap-3 shadow-xl shadow-pink-600 cursor-pointer transition-transform duration-200 active:scale-95"
            >
              <FaInstagramSquare size={40} className="text-pink-600" />
              <span className="text-gray-900 font-semibold text-lg">Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg gap-3 shadow-xl shadow-green-600 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <FaSquareWhatsapp size={40} className="text-green-600" />
              <span className="text-gray-900 font-semibold text-lg">WhatsApp</span>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg shadow-xl shadow-blue-600 gap-3 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <FaSquareXTwitter size={40} className="text-blue-600" />
              <span className="text-gray-900 font-semibold text-lg">Twitter</span>
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
