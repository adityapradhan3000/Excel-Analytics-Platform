import React from "react";
import { assets } from "../assets/assets";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-br from-pink-400 via-pink-200 to-cyan-100 text-slate-50">
      {/* Footer Content */}
      <div className="flex flex-row items-start justify-between gap-10 py-8 border-b border-gray-500/50">
        {/* Left Section: Logo & Branding */}
        <div>
          <div className="flex items-center gap-4">
            <img
              src={assets.analytics_logo}
              className="w-16 h-auto sm:w-24 rounded-lg"
              alt="Logo"
            />
            <h2 className="text-xl font-extrabold text-slate-950">
              Excel Analytics Platform
            </h2>
          </div>

          {/* Platform Description */}
          <p className="max-w-md mt-6 text-gray-900 font-bold">
            This is your own Excel analytics platform where users can upload
            their Excel sheets and extract valuable insights through dynamic
            charts and 3D models.
          </p>
        </div>

        {/* Right Section: Extra Content */}
        <div className="flex flex-col gap-4 items-start">
          <p className="text-lg font-bold text-slate-950 shadow-md p-2 rounded-lg shadow-slate-600">Social Media Links</p>
          {/* Instagram */}
          <div className="flex items-center gap-3 active:scale-95 duration-200 ease-in-out cursor-pointer">
            <FaInstagramSquare
              size={40}
              className="rounded-lg bg-gradient-to-br from-yellow-300 via-violet-500 to-pink-600" // Apply direct color to SVG icon
            />
            <p className="text-slate-950 font-bold text-lg">Instagram</p>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 active:scale-95 duration-200 ease-in-out cursor-pointer">
            <FaSquareWhatsapp
              size={40}
              className="rounded-lg bg-gradient-to-br from-green-600 via-green-500 to-green-400"
            />
            <p className="text-slate-950 font-bold text-lg">WhatsApp</p>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-3 active:scale-95 duration-200 ease-in-out cursor-pointer">
            <FaSquareXTwitter
              size={40}
              className="rounded-lg bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300"
            />
            <p className="text-slate-950 font-bold text-lg">Twitter</p>
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
