import React, { useState } from "react";
import { useEffect } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { Bar, Pie, Line } from "react-chartjs-2";
import { GrWaypoint } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toast styling
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Analysis = () => {
  const [selectedChart, setSelectedChart] = useState("");
  const [chartName, setChartName] = useState("");
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("uploadedData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.length === 0) return;

      const labels = parsedData.map(row => row["Name"] || Object.values(row)[0]); // Extract labels
      const columnKeys = Object.keys(parsedData[0]).filter(key => key !== "Name");

      const datasets = columnKeys.map((key, index) => ({
        label: key,
        data: parsedData.map(row => parseFloat(row[key]) || 0),
        backgroundColor: parsedData.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`),
        borderColor: parsedData.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`),
        borderWidth: 1,
      }));

      setChartData({ labels, datasets });
    }
  }, []);

  const handleCreateChart = () => {
    if (!chartName || !selectedChart) {
      toast.error("Please enter a chart name and select a chart type before proceeding!");
      return;
    }
    toast.success("Chart created successfully!");
    setChartVisible(true); // Enable chart rendering
  };


  const renderChart = () => {
    if (!chartVisible) return null; // Only render chart if chartVisible is true

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { ticks: { autoSkip: false } },
        y: { beginAtZero: true },
      }
    };


  switch (selectedChart) {
    case "bar":
      return <Bar data={chartData} options={chartOptions} />;
    case "pie":
      return <Pie data={chartData} />;
    case "line":
      return <Line data={chartData} options={chartOptions} />;
    default:
      return <p>Select a chart type to visualize data.</p>;
  }
};


  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-pink-200 via-violet-200 to-cyan-300 overflow-auto">
      <ToastContainer />
      <div className="flex flex-col justify-evenly items-center min-h-screen min-w-screen">
        <div className="flex flex-row justify-center gap-5 items-center min-h-screen min-w-screen">
          <div className="flex flex-col shadow-xl shadow-slate-700 rounded-lg p-8 gap-6">
          <h1 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700">
            ENTER THE DETAILS OF THE CHART
          </h1>
          <div className="flex flex-row-reverse gap-2">
            <input
              className="p-3 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out"
              type="text"
              placeholder="Enter Chart Name"
              value={chartName}
              onChange={(e) => setChartName(e.target.value)}
            />
            <MdDriveFileRenameOutline size={30} />
          </div>
          <div className="flex flex-row-reverse gap-2 items-center">
            <select
              className="p-2 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out cursor-pointer"
              onChange={(e) => setSelectedChart(e.target.value)}
            >
              <option value="">Select Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="line">Line Chart</option>
            </select>
            <FaChartSimple size={30} />
          </div>
          <button
            onClick={handleCreateChart}
            className="font-bold text-xl w-full p-2 shadow-xl border-2 border-slate-500 shadow-slate-700 rounded-lg active:scale-95 duration-200 ease-in-out active:bg-slate-500"
          >
            CREATE THE CHART
          </button>
        </div>
        <div className="flex flex-col gap-4 shadow-xl shadow-slate-700 rounded-lg p-5">
          <h1 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700">
            INSTRUCTIONS ON HOW TO UPLOAD THE CHART
          </h1>
          <div className="gap-3 flex flex-row-reverse justify-end items-center">
            <p className="text-md">Enter the name of the chart</p>
            <GrWaypoint size={20} />
          </div>
          <div className="gap-3 flex flex-row-reverse justify-end items-center">
            <p className="text-md">
              Enter the type of the chart you want to create for the particular sheet
            </p>
            <GrWaypoint size={20} />
          </div>
          <div className="gap-3 flex flex-row-reverse justify-end items-center">
            <p className="text-md">
              Enter the value 1 and value 2 
            </p>
            <GrWaypoint size={20} />
          </div>
        </div>
        </div>
        <div className="w-2/3 mt-5">{renderChart()}</div>
      </div>
    </div>
  );
};

export default Analysis;
