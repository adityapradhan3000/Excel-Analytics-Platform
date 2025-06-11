import React, { useState, useEffect } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { Bar, Pie, Line } from "react-chartjs-2";
import { GrWaypoint } from "react-icons/gr";
import { FaHandPointRight } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Analysis = () => {
  const [selectedChart, setSelectedChart] = useState("");
  const [chartName, setChartName] = useState("");
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const [availableColumns, setAvailableColumns] = useState([]); // Stores column names
  const [selectedXColumn, setSelectedXColumn] = useState("");
  const [selectedYColumn, setSelectedYColumn] = useState("");

  useEffect(() => {
  const storedData = localStorage.getItem("uploadedData");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    if (parsedData.length === 0) return;

    // Extract all column names dynamically (instead of filtering out "Name")
    const columnKeys = Object.keys(parsedData[0]); 

    setAvailableColumns(columnKeys); // Store column options
  }
}, []);

  const colorPalette = [
  "rgba(255, 99, 132, 0.6)", // Red
  "rgba(54, 162, 235, 0.6)", // Blue
  "rgba(255, 206, 86, 0.6)", // Yellow
  "rgba(75, 192, 192, 0.6)", // Teal
  "rgba(153, 102, 255, 0.6)", // Purple
  "rgba(255, 159, 64, 0.6)"  // Orange
];

const handleCreateChart = () => {
  if (!chartName || !selectedChart || !selectedXColumn || !selectedYColumn) {
    toast.error("Please enter chart details and select X & Y columns!");
    return;
  }

  const storedData = localStorage.getItem("uploadedData");
  if (!storedData) return;

  const parsedData = JSON.parse(storedData);
  
  const labels = parsedData.map(row => row[selectedXColumn] || "");
  const datasets = [{
    label: selectedYColumn,
    data: parsedData.map(row => parseFloat(row[selectedYColumn]) || 0),
    backgroundColor: colorPalette[Math.floor(Math.random() * colorPalette.length)], // Assign unique colors
    borderColor: "rgba(0, 0, 0, 1)", // Ensure visibility
    borderWidth: 1,
  }];

  setChartData({ labels, datasets });
  setChartVisible(true);
  toast.success("Chart created successfully!");
};

  const renderChart = () => {
    if (!chartVisible) return null; 

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

            {/* X-Axis Selection */}
            <div className="flex flex-row-reverse gap-2 items-center">
              <select
                className="p-2 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out cursor-pointer"
                value={selectedXColumn}
                onChange={(e) => setSelectedXColumn(e.target.value)}
              >
                <option value="">Select X-axis</option>
                {availableColumns.map((col) => (
                  <option key={col} value={col}>{col}</option>
                ))}
              </select>
              <FaHandPointRight size={30} />
            </div>

            {/* Y-Axis Selection */}
            <div className="flex flex-row-reverse gap-2 items-center">
              <select
                className="p-2 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out cursor-pointer"
                value={selectedYColumn}
                onChange={(e) => setSelectedYColumn(e.target.value)}
              >
                <option value="">Select Y-axis</option>
                {availableColumns.map((col) => (
                  <option key={col} value={col}>{col}</option>
                ))}
              </select>
              <FaHandPointRight size={30} />
            </div>

            <button
              onClick={handleCreateChart}
              className="font-extrabold text-xl w-full p-2 shadow-xl shadow-slate-700 rounded-lg active:scale-95 duration-200 ease-in-out active:bg-slate-500"
            >
              CREATE THE CHART
            </button>
          </div>
        </div>
        
        {/* Chart Rendering */}
        <div className="w-2/3 mt-5">{renderChart()}</div>
      </div>
    </div>
  );
};

export default Analysis;