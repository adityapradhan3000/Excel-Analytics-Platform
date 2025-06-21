import React from "react";
import { charts_data, chartsCategories } from "../assets/assets";
import { useState } from "react";
import ChartCard from "./ChartCard";

const Charts = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="flex flex-col items-center my-10 relative">
  {/* Charts Category Buttons */}
  <div className="flex rounded-lg p-7 shadow-xl shadow-orange-800 flex-wrap justify-center gap-4 sm:gap-8 mb-8">
    {chartsCategories.map((item) => (
      <div key={item} className="relative">
        <button
          onClick={() => setMenu(item)}
          className={`relative px-4 py-3 rounded-lg text-lg font-semibold transition duration-200 shadow-md ${
            menu === item ? "bg-slate-600 text-slate-900 scale-105" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <div
            className={`absolute inset-0 rounded-lg transition-all duration-200 ${
              menu === item ? "bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 opacity-100 shadow-xl shadow-orange-800" : "bg-transparent opacity-0"
            }`}
          ></div>
          <span className="relative z-10">{item}</span>
        </button>
      </div>
    ))}
  </div>

  {/* Centered Charts Grid */}
  <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto">
    {charts_data
      .filter((chart) => (menu === "All" ? true : chart.category === menu))
      .map((chart) => (
        <ChartCard key={chart._id} chart={chart} />
      ))}
  </div>
</div>
  );
};

export default Charts;
