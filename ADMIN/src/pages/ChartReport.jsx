import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../context/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const ChartReport = () => {
  const navigate = useNavigate();

  const chartTypes = [
    { type: "bar", label: "Bar Chart", image: assets.bar_chart },
    { type: "line", label: "Line Chart", image: assets.line_chart },
    { type: "pie", label: "Pie Chart", image: assets.pie_chart },
  ];

  const { backendUrl } = useContext(AppContent);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/chart/chartStats`);
        if (res.data.success) {
          setStats(res.data.stats);
          toast.success("Chart stats fetched successfully!");
        } else {
          toast.error("Failed to load chart stats.");
        }
      } catch (error) {
        toast.error("Server error while fetching chart summary.");
      }
    };
    fetchStats();
  }, [backendUrl]);

  const getCount = (type) => {
    const match = stats.find((s) => s.type === type);
    return match ? match.count : 0;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 p-8 flex flex-col gap-6 items-center">
      <ToastContainer />
      <img
        onClick={() => navigate("/home")}
        src={assets.excel_analytics_logo}
        alt=""
        className="h-24 w-24 animate-pulse absolute top-8 left-5 rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out cursor-pointer"
      />
      <h1 className="text-5xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 font-extrabold text-center">
        2D CHARTS REPORT
      </h1>
      <button
        onClick={() => navigate("/home")}
        className="top-8 animate-bounce right-14 absolute rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
      >
        <p className="font-bold text-lg">BACK</p>
      </button>
      <p className="text-xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-blue-400 to-green-900">
        All your saved charts are listed here
      </p>
      <div className="h-0.5 mt-10 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="grid grid-cols-1 animate-slideUp md:grid-cols-3 gap-6 w-full max-w-4xl cursor-pointer">
        {chartTypes.map(({ type, label, image }) => (
          <div
            key={type}
            className="bg-gradient-to-tr from-blue-400 via-orange-300 to-orange-400 rounded-xl shadow-lg shadow-orange-800 p-6 text-center hover:scale-[1.02] transition-all duration-300"
          >
            <img
              src={image}
              alt={`${label} Preview`}
              className="mx-auto object-contain rounded-md shadow-md shadow-slate-600 mb-4"
            />
            <h2 className="text-2xl font-bold">{label}</h2>
            <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tl from-slate-900 via-slate-700 to-slate-500 mt-3">
              {getCount(type)}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/home")}
        className="flex flex-row gap-3 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 rounded-lg p-4 shadow-xl shadow-orange-800 items-center active:scale-90 duration-300 ease-in-out"
      >
        <IoArrowBackCircle size={30} />
        <h1 className="text-xl font-extrabold">BACK</h1>
      </button>
    </div>
  );
};

export default ChartReport;
