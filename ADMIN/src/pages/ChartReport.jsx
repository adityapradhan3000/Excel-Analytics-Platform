import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../context/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ChartReport = () => {

    const navigate = useNavigate();

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
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-violet-400 to-cyan-400 p-8 flex flex-col gap-6 items-center">
      <ToastContainer />
      <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-pink-900 via-violet-700 to-cyan-600">
        CHART TYPE SUMMARY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {["bar", "line", "pie"].map((type) => (
          <div
            key={type}
            className="bg-gradient-to-tr from-pink-400 via-violet-500 to-cyan-400 rounded-xl shadow-lg shadow-slate-700 p-6 text-center"
          >
            <h2 className="text-2xl font-bold capitalize">{type} Chart</h2>
            <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tl from-slate-900 via-slate-700 to-slate-500 mt-4">
              {getCount(type)}
            </p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/home")} className="flex flex-row gap-3 rounded-lg p-4 shadow-xl shadow-slate-800 items-center active:scale-90 duration-300 ease-in-out">
        <IoArrowBackCircle size={30}/>
        <h1 className="text-xl font-extrabold">BACK</h1>
      </button>
    </div>
  );
};

export default ChartReport;
