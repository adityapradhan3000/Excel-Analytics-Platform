import React from "react";
import { assets } from "../assets/assets";
import Charts from "./Charts";

const Header = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={assets.background_image}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
        alt="Background Image"
      />

      {/* Header Content */}
      <div className="mx-8 sm:mx-16 xl:mx-24 relative z-10">

        {/* Main Heading */}
        <h1 className="pt-5 text-center text-xl sm:text-6xl font-semibold bg-gradient-to-r from-slate-950 to-slate-400 bg-clip-text text-transparent sm:leading-16">
          Your own <br />
          <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Excel Analytics Platform
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl font-bold text-center text-gray-700 mt-3">
          Unlock the power of your Excel data with intelligent insights and dynamic visualizations. Start exploring today!
        </p>

        <p className="text-lg font-bold text-center text-gray-800 mt-3">
          Here some of the information regarding the 2D charts and 3D models for the users prerequisite knowledge!
        </p>

        {/* Charts Section (Now inside header) */}
        <Charts />
      </div>
    </div>
  );
};

export default Header;