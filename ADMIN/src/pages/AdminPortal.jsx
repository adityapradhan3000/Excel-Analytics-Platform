import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 px-4 py-10">
      <div className="max-w-6xl w-full p-8 rounded-xl shadow-xl shadow-orange-800 bg-white/10 backdrop-blur-md text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 mb-4">
          WELCOME TO ADMIN PORTAL
        </h1>
        <p className="text-gray-100 text-lg font-extrabold mb-8 max-w-2xl mx-auto">
          Manage charts, users, and analytics with full control and real-time
          feedback. Your gateway to insight starts here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Interactive Charts */}
          <div className="bg-gradient-to-r p-7 animate-slideUp hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
            <img
              src={assets.manage_charts}
              alt="Interactive Charts"
              className="rounded-lg shadow-xl shadow-slate-800 object-contain"
            />
            <p className="mt-4 text-xl animate-pulse font-extrabold">
              MANAGE INTERACTIVE CHARTS
            </p>
            <p className="mt-2 text-sm font-bold">
              Easily create, update, and monitor all chart visualizations to
              maintain clarity and consistency across your data dashboard.
            </p>
            <button
              onClick={() => navigate("/history")}
              className="animate-bounce mt-3 font-bold shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              GET STARTED
            </button>
          </div>

          {/* 3D Visualization */}
          <div className="bg-gradient-to-r animate-slideUp p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
            <img
              src={assets.manage_users}
              alt="3D Visualization"
              className="rounded-lg shadow-xl shadow-slate-800 object-contain"
            />
            <p className="mt-4 text-xl animate-pulse font-extrabold">
              MANAGE USERS PROFILE
            </p>
            <p className="mt-2 text-sm font-bold">
              Oversee user accounts and permissions seamlessly, ensuring secure
              and personalized access to platform features.
            </p>
            <button
              onClick={() => navigate("/userList")}
              className="animate-bounce mt-3 font-bold shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              GET STARTED
            </button>
          </div>

          {/* Excel Integration */}
          <div className="bg-gradient-to-r animate-slideUp p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
            <img
              src={assets.analysis_charts}
              alt="Excel Integration"
              className="rounded-lg shadow-xl shadow-slate-800 object-contain"
            />
            <p className="mt-4 text-xl animate-pulse font-extrabold">
              ANALYZE DIFFERENT CHARTS
            </p>
            <p className="mt-2 text-sm font-bold">
              Gain comprehensive control over chart analytics to derive
              actionable insights and drive informed decision-making.
            </p>
            <button
              onClick={() => navigate("/report")}
              className="animate-bounce font-bold mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
