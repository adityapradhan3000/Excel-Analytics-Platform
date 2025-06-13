import React, { useContext, useEffect, useState } from 'react'
import { AppContent } from '../context/AppContext'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const ChartsPage = () => {

  const { backendUrl } = useContext(AppContent);
  const [ charts, setCharts ] = useState([]);

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
      <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700 mb-6">
        SAVED CHARTS HISTORY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {charts.map((chart, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-indigo-300"
          >
            <h2 className="text-xl font-semibold text-indigo-800">
              {chart.chartName}
            </h2>
            <p className="text-gray-700 mt-1">Chart Type: {chart.chartType}</p>
            <p className="text-gray-600 text-sm mt-2">
              X-Axis Field: <strong>{chart.value1}</strong><br />
              Y-Axis Field: <strong>{chart.value2}</strong>
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
  )
}

export default ChartsPage
