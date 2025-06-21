import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Three3DChartHistory = () => {

  const navigate = useNavigate();

  const { backendUrl } = useContext(AppContent);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/threeDChart/get3DChart`);
        if (res.data.success && Array.isArray(res.data.charts)) {
          setCharts(res.data.charts);
          toast.success("All the charts data are fetched successfully");
        } else {
          setCharts([]); // fallback to empty if malformed
        }
      } catch (err) {
        toast.error("Failed to fetch saved charts");
      }
    };

    fetchCharts();
  }, [backendUrl]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${backendUrl}/api/threeDChart/delete3DChart/${id}`
      );
      if (res.data.success) {
        toast.success("Chart data is deleted successfully!");
        setCharts((prev) => prev.filter((chart) => chart._id !== id));
      } else {
        toast.error("Failed to delete the chart data");
      }
    } catch (error) {
      toast.error("Error in deleting the chart data! Please try again");
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-gray-600 via-gray-700 to-gray-900 overflow-auto">
      <ToastContainer />
      <img
        onClick={() => navigate("/home")}
        src={assets.excel_analytics_logo}
        alt=""
        className="h-24 w-24 animate-pulse absolute top-8 left-5 rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out cursor-pointer"
      />
      <h1 className="text-5xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 font-extrabold text-center m-6">
        3D CHARTS HISTORY
      </h1>
      <button
        onClick={() => navigate("/history")}
        className="top-8 animate-bounce right-14 absolute rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
      >
        <p className="font-bold text-lg">BACK</p>
      </button>
      <p className="text-xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-blue-400 to-green-900">
        All your saved charts are listed here
      </p>
      <div className="h-0.5 mt-10 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
      <div className="overflow-x-auto m-6 shadow-xl shadow-orange-800 rounded-lg">
        <table className="min-w-full animate-slideUp table-auto text-left bg-white rounded-lg">
          <thead className="bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 text-indigo-900 font-bold">
            <tr>
              <th className="px-6 py-3 text-lg font-bold">CHART NAME</th>
              <th className="px-6 py-3 text-lg font-bold">CHART TYPE</th>
              <th className="px-6 py-3 text-lg font-bold">X-AXIS VALUE</th>
              <th className="px-6 py-3 text-lg font-bold">Y-AXIS VALUE</th>
              <th className="px-6 py-3 text-lg font-bold">Z-AXIS VALUE</th>
              <th className="px-6 py-3 text-lg font-bold">DATE</th>
              <th className="px-6 py-3 text-lg font-bold">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {charts.map((chart, index) => (
              <tr
                key={index}
                className="hover:bg-slate-100 bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 transition duration-200"
              >
                <td className="px-6 py-4 font-extrabold text-slate-800">
                  {chart.chartName}
                </td>
                <td className="px-6 py-4 text-slate-700 font-bold capitalize">
                  {chart.chartType}
                </td>
                <td className="px-6 py-4 font-bold text-slate-600">
                  {chart.value1}
                </td>
                <td className="px-6 py-4 font-bold text-slate-600">
                  {chart.value2}
                </td>
                <td className="px-6 py-4 font-bold text-slate-600">
                  {chart.value3}
                </td>
                <td className="px-6 py-4 font-bold text-slate-900">
                  {new Date(chart.dateUploaded).toLocaleDateString("en-GB")}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(chart._id)}
                    className="p-2 rounded-lg shadow-md text-red-600 hover:text-red-800 hover:scale-105 transition duration-200"
                  >
                    <MdDelete size={24} />
                  </button>
                </td>
              </tr>
            ))}
            {charts.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 px-6 py-4">
                  No saved charts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Three3DChartHistory;
