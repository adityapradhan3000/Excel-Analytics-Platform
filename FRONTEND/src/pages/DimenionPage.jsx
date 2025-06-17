import React, { useState, useEffect, useContext } from "react";
import Plot from "react-plotly.js";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DimenionPage = () => {
  const navigate = useNavigate();

  const { backendUrl, setChartsData } = useContext(AppContent);
  const [chartName, setChartName] = useState("");
  const [chartVisible, setChartVisible] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [availableColumns, setAvailableColumns] = useState([]);
  const [selectedXColumn, setSelectedXColumn] = useState("");
  const [selectedYColumn, setSelectedYColumn] = useState("");
  const [selectedZColumn, setSelectedZColumn] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("uploadedData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.length === 0) return;

      const columnKeys = Object.keys(parsedData[0]);
      setAvailableColumns(columnKeys);
    }
  }, []);

  const handleCreateChart = () => {
    if (
      !chartName ||
      !selectedXColumn ||
      !selectedYColumn ||
      !selectedZColumn
    ) {
      toast.error("Please select X, Y, and Z columns properly!");
      return;
    }

    const storedData = localStorage.getItem("uploadedData");
    if (!storedData) return;

    const parsedData = JSON.parse(storedData);
    const xValues = parsedData.map((row) => row[selectedXColumn]);
    const yValues = parsedData.map(
      (row) => parseFloat(row[selectedYColumn]) || 0
    );
    const zValues = parsedData.map(
      (row) => parseFloat(row[selectedZColumn]) || 0
    );

    const barWidth = 0.5; // Defines the width of the bars

    setChartData({ x: xValues, y: yValues, z: zValues, barWidth });
    setChartVisible(true);
    toast.success("3D Bar Chart created successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !chartName ||
      !selectedXColumn ||
      !selectedYColumn ||
      !selectedZColumn
    ) {
      toast.error(
        "Ensure X, Y, and Z columns are correctly selected before saving!"
      );
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/threeDChart/post3DChart`,
        {
          chartName,
          chartType: "3D Bar",
          value1: selectedXColumn,
          value2: selectedYColumn,
          value3: selectedZColumn,
        }
      );

      if (response.data.success) {
        toast.success("3D Bar Chart saved successfully!");
        setChartsData(response.data.chart);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Chart data did not save! Please try again.");
    }
  };

  const renderChart = () => {
    if (!chartVisible || !chartData) {
      return (
        <p className="text-lg font-bold text-red-500 text-center">
          No chart created yet.
        </p>
      );
    }

    return (
      <div className="flex justify-center items-center bg-white shadow-lg rounded-lg">
        <Plot
          data={[
            {
              type: "mesh3d",
              x: [...chartData.x, ...chartData.x],
              y: [...chartData.y, ...chartData.y],
              z: [...chartData.z.map((z) => z), ...chartData.z.map(() => 0)],
              color: "royalblue",
              opacity: 0.9, // Increased for better clarity
              intensity: [...chartData.z, ...chartData.z.map(() => 0)],
              contour: { show: true }, // Optional enhancement for gridlines
            },
          ]}
          layout={{
            width: 1200, // Increased width for full visibility
            height: 900, // Increased height
            title: {
              text: "3D CHART",
              font: { size: 22, color: "#4A4A4A" },
            },
            margin: { t: 50, l: 50, r: 50, b: 50 }, // Balanced spacing
            scene: {
              xaxis: {
                title: selectedXColumn,
                showgrid: true,
                gridcolor: "#DDD",
              },
              yaxis: {
                title: selectedYColumn,
                showgrid: true,
                gridcolor: "#DDD",
              },
              zaxis: {
                title: selectedZColumn,
                showgrid: true,
                gridcolor: "#DDD",
              },
              camera: { eye: { x: 1.5, y: 1.5, z: 1.5 } }, // Adjusted camera angle
            },
          }}
        />
      </div>
    );
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-pink-200 via-violet-200 to-cyan-300 overflow-auto">
      <ToastContainer />
      <h2 className="m-5 text-center text-2xl font-bold text-indigo-800">
        3D Chart Analysis
      </h2>

      <div className="flex flex-col max-w-lg mx-auto shadow-2xl shadow-slate-800 rounded-lg p-6 gap-4">
        <h1 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-violet-900 via-pink-500 to-cyan-700">
          ENTER THE DETAILS OF THE CHART
        </h1>

        {/* Chart Name Input */}
        <div className="mt-2">
          <label className="block text-lg font-semibold text-gray-700">
            Chart Name:
          </label>
          <input
            type="text"
            value={chartName}
            onChange={(e) => setChartName(e.target.value)}
            placeholder="Enter Chart Title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 transition-all duration-300"
          />
        </div>

        {/* Column Selection */}
        <div className="mt-2">
          <label className="block text-lg font-semibold text-gray-700">
            Select X Column:
          </label>
          <select
            value={selectedXColumn}
            onChange={(e) => setSelectedXColumn(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          >
            <option value="">Choose X Axis</option>
            {availableColumns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2">
          <label className="block text-lg font-semibold text-gray-700">
            Select Y Column:
          </label>
          <select
            value={selectedYColumn}
            onChange={(e) => setSelectedYColumn(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-green-400 transition-all duration-300"
          >
            <option value="">Choose Y Axis</option>
            {availableColumns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2">
          <label className="block text-lg font-semibold text-gray-700">
            Select Z Column:
          </label>
          <select
            value={selectedZColumn}
            onChange={(e) => setSelectedZColumn(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-red-400 transition-all duration-300"
          >
            <option value="">Choose Z Axis</option>
            {availableColumns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chart Creation Buttons */}

      <div className="flex flex-row justify-center items-center gap-4 p-4">
        <button
          onClick={handleCreateChart}
          className="mt-4 px-6 py-3 text-slate-900 rounded-lg shadow-xl shadow-slate-900 active:scale-90 duration-300 ease-in-out"
        >
          <h1 className="text-xl font-extrabold">GENERATE 3D CHART</h1>
        </button>

        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-3 text-slate-900 rounded-lg shadow-xl shadow-slate-900 active:scale-90 duration-300 ease-in-out"
        >
          <h1 className="text-xl font-extrabold">SAVE CHART</h1>
        </button>

        <button
          onClick={() => navigate("/3DHistoryPage")}
          className="mt-4 px-6 py-3 text-slate-900 rounded-lg shadow-xl shadow-slate-900 active:scale-90 duration-300 ease-in-out"
        >
          <h1 className="text-xl font-extrabold">SAVE CHART</h1>
        </button>
      </div>

      {/* Render Chart */}
      <div className="items-center justify-center content-center shadow m-3 min-h min-w shadow-slate-800 rounded-lg p-4">
        {renderChart()}
      </div>
    </div>
  );
};

export default DimenionPage;
