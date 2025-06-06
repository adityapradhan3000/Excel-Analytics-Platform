import React, { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import { GrWaypoint } from "react-icons/gr";

const Analysis = () => {
  const [selectedChart, setSelectedChart] = useState("");

  // Function to handle chart selection
  const handleChartSelection = (event) => {
    setSelectedChart(event.target.value);
    console.log("Selected Chart Type:", event.target.value); // Debugging purpose
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-pink-200 via-violet-200 to-cyan-300 overflow-auto">
      <div className="flex flex-row justify-evenly items-center min-h-screen min-w-screen">
        <div className="flex flex-col shadow-xl shadow-slate-700 rounded-lg p-8 gap-6">
          <h1 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700">
            ENTER THE DETAILS OF THE CHART
          </h1>
          <div className="flex flex-row-reverse gap-2">
            <input
              className="p-3 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out"
              type="text"
              placeholder="Enter Chart Name"
            />
            <MdDriveFileRenameOutline size={30} />
          </div>
          <div className="flex flex-row-reverse gap-2 items-center">
            <select
              className="p-2 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out cursor-pointer"
              onChange={handleChartSelection}
              value={selectedChart} // Bind selected value
            >
              <option value="" disabled>
                Select Chart Type
              </option>
              <option value="bar">Bar Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="line">Line Chart</option>
            </select>
            <FaChartSimple size={30} />
          </div>
          <div className="flex flex-row-reverse gap-2 item-center">
            <input
              className="p-3 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out"
              type="text"
              placeholder="Enter the Value 1"
            />
            <FaHandPointRight size={30} />
          </div>
          <div className="flex flex-row-reverse gap-2 item-center">
            <input
              className="p-3 w-full h-10 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out"
              type="text"
              placeholder="Enter the Value 2"
            />
            <FaHandPointRight size={30} />
          </div>
          <button className="font-bold text-xl w-full p-2 shadow-xl border-2 border-slate-500 shadow-slate-700 rounded-lg active:scale-95 duration-200 ease-in-out active:bg-slate-500">
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
    </div>
  );
};

export default Analysis;
