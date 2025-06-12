import React, { useState, useEffect, useContext } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { Bar, Pie, Line } from "react-chartjs-2";
import { GrWaypoint } from "react-icons/gr";
import { FaHandPointRight } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Chart, registerables } from "chart.js";
import { AppContent } from "../context/AppContext";
import axios from "axios";

Chart.register(...registerables);

const Analysis = () => {
  const { backendUrl, setChartsData } = useContext(AppContent);

  const [selectedChart, setSelectedChart] = useState("");
  const [chartName, setChartName] = useState("");
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const [availableColumns, setAvailableColumns] = useState([]); // Stores column names
  const [selectedXColumn, setSelectedXColumn] = useState("");
  const [selectedYColumn, setSelectedYColumn] = useState("");
  const [nameOfChart, setNameOfChart] = useState("");
  const [typeOfChart, setTypeOfChart] = useState("");
  const [valueOfx, setValueOfx] = useState("");
  const [valueOfy, setValueOfy] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("uploadedData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.length === 0) return;

      // Extract all column names dynamically
      const columnKeys = Object.keys(parsedData[0]);

      setAvailableColumns(columnKeys); // Store column options
      console.log("Available columns:", columnKeys); // Debugging log
    }
  }, []);

  const colorPalette = [
    "rgba(255, 99, 132, 0.6)", // Red
    "rgba(54, 162, 235, 0.6)", // Blue
    "rgba(255, 206, 86, 0.6)", // Yellow
    "rgba(75, 192, 192, 0.6)", // Teal
    "rgba(153, 102, 255, 0.6)", // Purple
    "rgba(255, 159, 64, 0.6)", // Orange
  ];

  const handleCreateChart = () => {
    if (!chartName || !selectedChart || !selectedXColumn || !selectedYColumn) {
      toast.error("Please enter chart details and select X & Y columns!");
      return;
    }

    const storedData = localStorage.getItem("uploadedData");
    if (!storedData) return;

    const parsedData = JSON.parse(storedData);

    const labels = parsedData.map((row) => row[selectedXColumn] || "");
    const datasets = [
      {
        label: selectedYColumn,
        data: parsedData.map((row) => parseFloat(row[selectedYColumn]) || 0),
        backgroundColor:
          colorPalette[Math.floor(Math.random() * colorPalette.length)], // Ensures unique colors
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
    ];

    setChartData({ labels, datasets });
    setChartVisible(true);
    toast.success("Chart created successfully!");
    console.log("Chart created with data:", { labels, datasets }); // Debugging log
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!chartName || !selectedChart || !selectedXColumn || !selectedYColumn) {
      toast.error("Please fill all the necessary details!");
      return;
    }

    try {
      const response = await axios.post(`${backendUrl}/api/chart/addCharts`, {
        chartName: chartName,
        chartType: selectedChart,
        value1: selectedXColumn,
        value2: selectedYColumn,
      });

      if (response.data.success) {
        toast.success("Chart data saved Successfully!");
        setChartsData(response.data.chart);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Chart data did not saved! Please try again");
    }
  };

  const renderChart = () => {
    if (!chartVisible || !chartData)
      return (
        <p className="text-lg font-bold text-red-500">No chart created yet.</p>
      );

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { ticks: { autoSkip: false } },
        y: { beginAtZero: true },
      },
    };

    return (
      <div className="relative w-full flex flex-col items-center">
        {/* Chart Component */}
        {selectedChart === "bar" && (
          <Bar data={chartData} options={chartOptions} />
        )}
        {selectedChart === "pie" && <Pie data={chartData} />}
        {selectedChart === "line" && (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>
    );
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-pink-200 via-violet-200 to-cyan-300 overflow-auto">
      <ToastContainer />
      <form
        className="flex flex-col justify-evenly items-center min-h-screen min-w-screen"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-row justify-center gap-5 items-center min-h-screen min-w-screen">
            <div className="flex flex-col shadow-xl shadow-slate-700 rounded-lg p-8 gap-6">
              <h1 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700">
                ENTER THE DETAILS OF THE CHART
              </h1>
              <div className="flex flex-row-reverse gap-2">
                <input
                  className="p-3 w-full h-10 rounded-xl shadow-xl shadow-slate-500"
                  type="text"
                  placeholder="Enter Chart Name"
                  value={chartName}
                  onChange={(e) => setChartName(e.target.value)}
                />
                <MdDriveFileRenameOutline size={30} />
              </div>

              <div className="flex flex-row-reverse gap-2 items-center">
                <select
                  className="p-2 w-full h-10 rounded-xl shadow-xl shadow-slate-500 cursor-pointer"
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
                  className="p-2 w-full h-10 rounded-xl shadow-xl shadow-slate-500 cursor-pointer"
                  value={selectedXColumn}
                  onChange={(e) => setSelectedXColumn(e.target.value)}
                >
                  <option value="">Select X-axis</option>
                  {availableColumns.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
                <FaHandPointRight size={30} />
              </div>

              {/* Y-Axis Selection */}
              <div className="flex flex-row-reverse gap-2 items-center">
                <select
                  className="p-2 w-full h-10 rounded-xl shadow-xl shadow-slate-500 cursor-pointer"
                  value={selectedYColumn}
                  onChange={(e) => setSelectedYColumn(e.target.value)}
                >
                  <option value="">Select Y-axis</option>
                  {availableColumns.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
                <FaHandPointRight size={30} />
              </div>

              {/* Buttons must stay inside the form */}
              <button
                type="button"
                onClick={handleCreateChart}
                className="font-extrabold text-xl w-full p-2 shadow-xl shadow-slate-700 rounded-lg active:bg-slate-500"
              >
                CREATE THE CHART
              </button>
              <button
                className="font-extrabold text-xl w-full p-2 shadow-xl shadow-slate-700 rounded-lg active:bg-slate-500"
                type="button"
                onClick={handleSubmit}
              >
                SAVE CHART DATA
              </button>
            </div>
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
              Enter the value for X-axis 
            </p>
            <GrWaypoint size={20} />
          </div>
          <div className="gap-3 flex flex-row-reverse justify-end items-center">
            <p className="text-md">
              Enter the value for Y-axis 
            </p>
            <GrWaypoint size={20} />
          </div>
        </div>
        </div>

        {/* Chart Rendering */}
        <div
          className={`w-full max-w-5xl min-h rounded-xl mb-3 shadow-2xl shadow-slate-900 p-6 transition-all duration-500 ease-in-out ${
            chartVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {renderChart()}
        </div>
      </form>{" "}
      {/* Ensuring the form wraps all input elements */}
    </div>
  );
};

export default Analysis;
