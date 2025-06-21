import React, { useState, useEffect, useContext } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { Bar, Pie, Line } from "react-chartjs-2";
import { GrWaypoint } from "react-icons/gr";
import { LuHistory } from "react-icons/lu";
import { FaHandPointRight } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { GiCube } from "react-icons/gi";
import { FaSave } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Chart, registerables } from "chart.js";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { useRef } from "react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

Chart.register(...registerables);

const Analysis = () => {
  const { backendUrl, setChartsData } = useContext(AppContent);

  const navigate = useNavigate();

  const [selectedChart, setSelectedChart] = useState("");
  const [chartName, setChartName] = useState("");
  const [chartData, setChartData] = useState(null);
  const [chartVisible, setChartVisible] = useState(false);
  const [availableColumns, setAvailableColumns] = useState([]); // Stores column names
  const [selectedXColumn, setSelectedXColumn] = useState("");
  const [selectedYColumn, setSelectedYColumn] = useState("");
  const chartWrapperRef = useRef(null);

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
        backgroundColor: parsedData.map(
          (_, index) => colorPalette[index % colorPalette.length]
        ),
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

  const handleDownloadPNG = () => {
    const canvas = chartWrapperRef.current?.querySelector("canvas");
    if (!canvas) return toast.error("Chart not available!");

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `${chartName || "chart"}.png`;
    link.click();
  };

  const handleDownloadPDF = () => {
    const canvas = chartWrapperRef.current?.querySelector("canvas");
    if (!canvas) return toast.error("Chart not available!");

    const image = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(image, "PNG", 40, 40, pageWidth - 80, pageHeight - 80);
    pdf.save(`${chartName || "chart"}.pdf`);
  };

  const renderChart = () => {
    if (!chartVisible || !chartData)
      return (
        <p className="text-lg font-bold text-black-500">
          No chart created yet.
        </p>
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
      <div
        ref={chartWrapperRef}
        className="relative w-full flex flex-col items-center"
      >
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
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 gap-4">
      <img
        onClick={() => navigate("/home")}
        src={assets.excel_analytics_logo}
        alt=""
        className="h-24 w-24 absolute top-5 animate-pulse left-5 rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out cursor-pointer"
      />
      <h1 className="text-5xl animate-slideUp bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 font-extrabold text-center m-6">
        WELCOME TO ANALYSIS SECTION
      </h1>
      <button
        onClick={() => navigate("/hero")}
        className="top-8 absolute animate-bounce right-14 rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
      >
        <p className="font-bold text-lg">BACK</p>
      </button>
      <div className="h-0.5 mt-10 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
      <ToastContainer />
      <form
        className="flex flex-col px-24 justify-evenly items-center min-h-screen min-w-screen"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-6 min-h-screen w-full">
          {/* Chart Input Form Section */}
          <div className="flex bg-gradient-to-r animate-slideUp from-blue-400 via-orange-300 to-orange-400 flex-col shadow-xl shadow-orange-700 rounded-lg p-8 gap-6 w-full lg:w-1/2 bg-white/5">
            <h1 className="font-extrabold text-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-700 to-green-700">
              ENTER THE DETAILS OF THE CHART
            </h1>

            {/* Chart Name Input */}
            <div className="flex flex-row-reverse gap-2 items-center">
              <input
                className="p-3 w-full h-10 rounded-xl shadow-xl shadow-slate-500"
                type="text"
                placeholder="Enter Chart Name"
                value={chartName}
                onChange={(e) => setChartName(e.target.value)}
              />
              <MdDriveFileRenameOutline size={30} className="animate-pulse" />
            </div>

            {/* Chart Type Selector */}
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
              <FaChartSimple size={30} className="animate-pulse" />
            </div>

            {/* X-Axis Selector */}
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
              <FaHandPointRight size={30} className="animate-pulse" />
            </div>

            {/* Y-Axis Selector */}
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
              <FaHandPointRight size={30} className="animate-pulse" />
            </div>

            {/* Action Buttons */}
            <button
              type="button"
              onClick={handleCreateChart}
              className="font-extrabold text-xl w-full p-2 shadow-xl shadow-slate-700 rounded-lg active:scale-95 duration-300 ease-in-out"
            >
              CREATE THE 2D CHART
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex flex-row justify-center items-center gap-3 font-extrabold text-xl w-full p-2 shadow-xl shadow-slate-700 rounded-lg active:scale-95 duration-300 ease-in-out"
            >
              <FaSave size={30} />
              SAVE CHART DATA
            </button>
            <button
              onClick={() => navigate("/history")}
              className="flex flex-row justify-center items-center gap-3 font-extrabold text-xl w-full p-2 shadow-xl shadow-slate-700 rounded-lg active:scale-95 duration-300 ease-in-out"
            >
              <LuHistory size={30} />
              HISTORY
            </button>
            <button
              type="button"
              onClick={() => navigate("/3dPage")}
              className="flex flex-row justify-center items-center gap-3 font-extrabold text-xl w-full p-2 shadow-xl shadow-slate-700 rounded-lg active:scale-95 duration-300 ease-in-out"
            >
              <GiCube size={30} />
              3D CHARTS SECTION
            </button>
          </div>

          {/* Chart Preview Section */}
          <div className="flex flex-col justify-center bg-gradient-to-r from-blue-400 via-orange-200 to-orange-300 items-center shadow-xl shadow-orange-700 px-4 rounded-lg lg:gap-8 min-h-[630px] bg-white/5">
            <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-700 to-green-400 animate-bounce font-extrabold">
              CREATE NEW CHART
            </h1>
            <div className="animate-slideUp m-4 shadow-xl shadow-orange-700 relative w-full">
              <img
                src={assets.twoD_charts}
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

        <div className="flex gap-4 mt-8 mb-8 justify-center">
          <button
            onClick={handleDownloadPNG}
            className="from-blue-400 bg-gradient-to-r via-orange-400 to-orange-500 text-slate-950 font-bold px-4 py-2 rounded-lg shadow-xl shadow-orange-800"
          >
            Download as PNG
          </button>
          <button
            onClick={handleDownloadPDF}
            className="from-blue-400 bg-gradient-to-r via-orange-400 to-orange-500 text-slate-950 font-bold px-4 py-2 rounded-lg shadow-xl shadow-orange-800"
          >
            Download as PDF
          </button>
        </div>

        {/* Chart Rendering */}
        <div
          className={`w-full max-w-5xl bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300
 min-h rounded-xl mt-10 mb-24 shadow-2xl shadow-orange-900 p-6 transition-all duration-500 ease-in-out ${
   chartVisible ? "opacity-100 scale-110" : "opacity-0 scale-95"
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
