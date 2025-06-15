import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaArrowRight } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const ChartsPage = () => {
  const { backendUrl } = useContext(AppContent);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/chart/fetchCharts`);
        if (res.data.success) {
          setCharts(res.data.charts);
          toast.success("All the charts data are fetched successfully");
        }
      } catch (err) {
        toast.error("Failed to fetch saved charts");
      }
    };

    fetchCharts();
  }, [backendUrl]);

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-pink-200 via-violet-200 to-cyan-300 overflow-auto">
      <ToastContainer />
      <h1 className="text-3xl mt-6 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700 mb-6">
        SAVED CHARTS HISTORY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 m-6 gap-6">
        {charts.map((chart, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-pink-200 via-violet-300 to-cyan-400 shadow-xl shadow-slate-800 rounded-lg p-4"
          >
            <h2 className=" flex flex-row gap-3 items-center text-xl font-semibold text-indigo-800">
              <span className="text-xl font-extrabold">CHART NAME</span>{" "}
              <FaArrowRight /> {chart.chartName}
            </h2>
            <p className="flex flex-row items-center gap-2 text-gray-700 mt-1">
              <span className="text-lg font-extrabold">CHART TYPE </span>{" "}
              <FaArrowRight />{" "}
              <span className="text-lg font-bold">{chart.chartType}</span>
              <span className="font-bold">chart</span>
            </p>
            <p className="text-gray-600 text-md font-bold mt-2 flex items-center gap-2">
              X-Axis Field <FaLongArrowAltRight className="text-slate-900"/>{" "}
              <span className="font-bold">{chart.value1}</span>
            </p>
            <p className="text-gray-600 text-md font-bold mt-1 flex items-center gap-2">
              Y-Axis Field <FaLongArrowAltRight className="text-slate-900" />{" "}
              <span className="font-bold">{chart.value2}</span>
            </p>
          </div>
        ))}
        {charts.length === 0 && (
          <p className="text-lg text-gray-600 text-center col-span-full">
            No saved charts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ChartsPage;
