import React, { useState, useEffect, useContext } from "react";
import Plot from "react-plotly.js";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { GrWaypoint } from "react-icons/gr";
import { FaChartSimple } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

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
  const [selected3DChart, setSelected3DChart] = useState("mesh3d");

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
      !selected3DChart ||
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
          chartType: selected3DChart,
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
      <div className="flex justify-center items-center bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300 shadow-lg rounded-full">
        <Plot
          data={[
            selected3DChart === "scatter3d"
              ? {
                  type: "scatter3d",
                  mode: "markers",
                  marker: {
                    size: 5,
                    color: chartData.z,
                    colorscale: "Viridis",
                    opacity: 0.8,
                  },
                  x: chartData.x,
                  y: chartData.y,
                  z: chartData.z,
                }
              : {
                  type: "mesh3d",
                  x: [...chartData.x, ...chartData.x],
                  y: [...chartData.y, ...chartData.y],
                  z: [
                    ...chartData.z.map((z) => z),
                    ...chartData.z.map(() => 0),
                  ],
                  color: "royalblue",
                  opacity: 0.9,
                  intensity: [...chartData.z, ...chartData.z.map(() => 0)],
                },
          ]}
          layout={{
            width: 1200,
            height: 600,
            title: {
              text: `${selected3DChart.toUpperCase()} CHART`,
              font: { size: 20, color: "#000000" },
            },
            margin: { t: 50, l: 50, r: 50, b: 50 },
            scene: {
              xaxis: {
                title: selectedXColumn,
                showgrid: true,
                gridcolor: "#000000",
              },
              yaxis: {
                title: selectedYColumn,
                showgrid: true,
                gridcolor: "#000000",
              },
              zaxis: {
                title: selectedZColumn,
                showgrid: true,
                gridcolor: "#000000",
              },
              camera: { eye: { x: 1.5, y: 1.5, z: 1.5 } },
            },
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 gap-4">
      <img
        onClick={() => navigate("/home")}
        src={assets.excel_analytics_logo}
        alt=""
        className="h-24 w-24 absolute top-5 animate-pulse left-5 rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out cursor-pointer"
      />
      <h1 className="text-5xl animate-slideUp bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 font-extrabold text-center m-6">
        3D CHART CHART ANALYSIS
      </h1>
      <button
        onClick={() => navigate("/analysis")}
        className="top-8 absolute animate-bounce right-14 rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
      >
        <p className="font-bold text-lg">BACK</p>
      </button>
      <div className="h-0.5 mt-10 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
      <ToastContainer />

      <div className="flex flex-row gap-5 justify-evenly items-center m-6 p-5">
        <div className="flex flex-col w-full lg:w-1/2 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 shadow-2xl shadow-slate-800 rounded-lg p-6 gap-4">
          <h1 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-blue-700 to-green-700">
            ENTER THE DETAILS OF THE CHART
          </h1>

          {/* Chart Name Input */}
          <div className="mt-2 flex flex-row-reverse gap-2 items-center">
            <input
              type="text"
              value={chartName}
              onChange={(e) => setChartName(e.target.value)}
              placeholder="Enter Chart Title"
              className="w-full placeholder:text-slate-900 px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-violet-500 transition-all duration-300"
            />
            <MdDriveFileRenameOutline size={30} className="animate-pulse" />
          </div>

          <div className="mt-2 flex flex-row-reverse gap-2 items-center">
            <select
              className="w-full placeholder:text-slate-900 px-3 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              value={selected3DChart}
              onChange={(e) => setSelected3DChart(e.target.value)}
              placeholder="Enter the Chart Type"
            >
              <option value="mesh3d">Mesh 3D</option>
              <option value="scatter3d">Scatter 3D</option>
            </select>
            <FaChartSimple size={30} className="animate-pulse" />
          </div>

          {/* Column Selection */}
          <div className="mt-2 flex flex-row-reverse gap-2 items-center">
            <select
              value={selectedXColumn}
              onChange={(e) => setSelectedXColumn(e.target.value)}
              className="w-full px-3 py-2 placeholder:text-slate-900 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              placeholder="Select the X value"
            >
              <option value="">Choose X Axis</option>
              {availableColumns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
            <FaHandPointRight size={30} className="animate-pulse" />
          </div>

          <div className="mt-2 flex flex-row-reverse gap-2 items-center">
            <select
              value={selectedYColumn}
              onChange={(e) => setSelectedYColumn(e.target.value)}
              className="w-full px-3 py-2 border placeholder:text-slate-900 border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-green-400 transition-all duration-300"
              placeholder="Select the Y value"
            >
              <option value="">Choose Y Axis</option>
              {availableColumns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
            <FaHandPointRight size={30} className="animate-pulse" />
          </div>

          <div className="mt-2 flex flex-row-reverse gap-2 items-center">
            <select
              value={selectedZColumn}
              onChange={(e) => setSelectedZColumn(e.target.value)}
              className="w-full px-3 py-2 border placeholder:text-slate-900 border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-red-400 transition-all duration-300"
              placeholder="Select the Z value"
            >
              <option value="">Choose Z Axis</option>
              {availableColumns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
            <FaHandPointRight size={30} className="animate-pulse" />
          </div>

          <button
            onClick={handleCreateChart}
            className="mt-4 px-6 py-2 text-slate-900 rounded-lg shadow-xl shadow-slate-900 active:scale-90 duration-300 ease-in-out"
          >
            <h1 className="text-xl font-extrabold">GENERATE 3D CHART</h1>
          </button>

          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 flex flex-row justify-center items-center gap-3 text-slate-900 rounded-lg shadow-xl shadow-slate-900 active:scale-90 duration-300 ease-in-out"
          >
            <FaSave size={30} />
            <h1 className="text-xl font-extrabold">SAVE CHART DATA</h1>
          </button>

          <button
            onClick={() => navigate("/3DHistoryPage")}
            className="mt-4 px-6 flex flex-row justify-center items-center gap-3 py-2 text-slate-900 rounded-lg shadow-xl shadow-slate-900 active:scale-90 duration-300 ease-in-out"
          >
            <LuHistory size={30} />
            <h1 className="text-xl font-extrabold">HISTORY</h1>
          </button>
        </div>

        <div className="flex flex-col justify-center bg-gradient-to-r from-blue-400 via-orange-200 to-orange-300 items-center shadow-xl shadow-orange-700 px-4 rounded-lg lg:gap-8 min-h-[540px] bg-white/5">
          <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-700 to-green-400 animate-bounce font-extrabold">
            CREATE NEW CHART
          </h1>
          <div className="animate-slideUp m-4 shadow-xl shadow-orange-700 relative w-full">
            <img
              src={assets.threeD_charts}
              alt="Excel Background"
              className="w-full h-full rounded-lg shadow-xl shadow-slate-950"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-black/50">
              {/* Optional overlay content */}
              <h1 className="font-4xl text-slate-50 font-extrabold">
                INSTRUCTIONS ON HOW TO CREATE TO CHART
              </h1>
              <p className="flex flex-row gap-3 justify-center items-center font-xl text-slate-50">
                <GrWaypoint size={20} />
                Enter the name of your chart
              </p>
              <p className="flex flex-row gap-3 justify-center items-center font-xl text-slate-50">
                <GrWaypoint size={20} />
                Select the type of the chart
              </p>
              <p className="font-xl text-slate-50 justify-center flex flex-row gap-3 items-center">
                <GrWaypoint size={20} />
                Select the value of the X-axis
              </p>
              <p className="font-xl text-slate-50 justify-center flex flex-row gap-3 items-center">
                <GrWaypoint size={20} />
                Select the value of the Y-axis
              </p>
              <p className="font-xl text-slate-50 justify-center flex flex-row gap-3 items-center">
                <GrWaypoint size={20} />
                Select the value of the Z-axis
              </p>
              <p className="font-xl text-slate-50 justify-center flex flex-row gap-3 items-center">
                <GrWaypoint size={20} />
                Then click on the button to create the chart
              </p>
              <p className="font-xl text-slate-50 justify-center flex flex-row gap-3 items-center">
                <IoIosWarning size={20} />
                Attention! Fill all the details to generate the charts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Render Chart */}
      <div className="items-center  justify-center content-center shadow-xl m-3 min-h min-w shadow-orange-800 rounded-lg p-5">
        {renderChart()}
      </div>
    </div>
  );
};

export default DimenionPage;
