import React from "react";
import { assets } from "../assets/assets";
import Charts from "./Charts";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="relative px-5 w-screen min-h-screen overflow-hidden bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <div className="animate-slideUp mt-4 relative mx-auto w-screen max-w-screen-lg">
        <img
          src={assets.excel_background1}
          alt="Excel Background"
          className="w-full opacity-65 h-auto rounded-lg shadow-xl shadow-slate-950"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-black/50">
          <h1 className="text-4xl font-extrabold text-white text-center px-4">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-500 via-orange-300 to-orange-400">
              Excel analytics
            </span>{" "}
            Platform
          </h1>
          <p className="text-lg font-bold text-slate-50 text-center px-6">
            Excel Analytics Platform empowers users with advanced data
            visualization and insight-driven analytics, making informed
            decision-making effortless.
          </p>
          <button
            onClick={() => navigate("/hero")}
            className="flex flex-row items-center gap-3 rounded-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-7 py-2 shadow-xl shadow-cyan-800 duration-200 ease-in-out active:scale-90 animate-bounce cursor-pointer"
          >
            <p className="text-lg font-bold">GET STARTED</p>
          </button>
        </div>
      </div>

      <div className="h-0.5 mt-14 rounded-full w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="m-11 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl animate-bounce rounded-xl font-bold p-5 shadow-xl shadow-orange-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
          Key Features
        </h1>
        <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-green-400 font-extrabold">
          Explore most exciting features of your own{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400">
            Excel analytics platform
          </span>
        </p>
      </div>

      <div className="m-11 flex flex-row justify-evenly items-center">
        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <img
            src={assets.interactive_charts}
            alt="Writing Blog"
            className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
          />
          <p className="mt-4 text-xl font-bold">INTERACTIVE CHARTS</p>
          <p className="mt-3 font-semibold px-2">
            Create Dynamic and interactive charts that allows you to explore
            your data from different angles and hence analyze every aspect
          </p>
          <button
            onClick={() => navigate("/hero")}
            className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
          >
            <p className="font-bold">GET STARTED</p>
          </button>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <img
            src={assets.interactive_3Dcharts}
            alt="Writing Blog"
            className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
          />
          <p className="mt-4 text-xl font-bold">3D VISUALIZATION</p>
          <p className="mt-3 font-semibold px-2">
            Visualize your data in the stunning 3D charts adding depth and
            perspective to your excel sheets analysis.
          </p>
          <button
            onClick={() => navigate("/hero")}
            className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
          >
            <p className="font-bold">GET STARTED</p>
          </button>
        </div>

        <div className="bg-gradient-to-r p-5 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <img
            src={assets.upload_excel_sheet}
            alt="Writing Blog"
            className="rounded-lg p-2 shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
          />
          <p className="mt-4 text-xl font-bold">EXCEL INTEGRATION</p>
          <p className="mt-3 font-semibold px-2">
            Seamlessly upload you Excel Sheet or the Files and start creating
            charts in minutes and observe the preview of sheets also
          </p>
          <button
            onClick={() => navigate("/hero")}
            className="animate-bounce mt-3 shadow-xl shadow-slate-950 rounded-full p-3 active:scale-90 duration-200 transition-all"
          >
            <p className="font-bold">GET STARTED</p>
          </button>
        </div>
      </div>

      <div className="h-0.5 mt-14 rounded-full w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="m-11 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl animate-bounce rounded-xl font-bold p-5 shadow-xl shadow-orange-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
          Use Cases
        </h1>
        <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-green-400 font-bold">
          See how{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
            Excel analytics platform
          </span>{" "}
          help you to visualize data across various industries and applications
        </p>
      </div>

      <div className="m-11 flex flex-row justify-evenly items-center">
        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <img
            src={assets.data_visualization_one}
            alt="Writing Blog"
            className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
          />
          <p className="mt-4 text-xl font-bold">DATA VISUALIZATION</p>
          <p className="mt-3 font-semibold px-2">
            Transform raw spreadsheet data into dynamic charts, graphs and
            dashboards for real-time insights. Perfect for decision-makers who
            need to spot trends effectively
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <img
            src={assets.report_generation_one}
            alt="Writing Blog"
            className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
          />
          <p className="mt-4 text-xl font-bold">AUTOMATED REPORT GENERATION</p>
          <p className="mt-3 font-semibold px-2">
            Streamline repetitive tasks by automating Excel reports, enabling
            buisnesses to save time and reduce errors. This feature is ideal for
            financial analysts, project managers and sales teams
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <img
            src={assets.data_integration_one}
            alt="Writing Blog"
            className="rounded-lg shadow-xl shadow-slate-800 w-40 sm:w-56 md:w-64 h-auto object-contain"
          />
          <p className="mt-4 text-xl font-bold">
            DATA INTEGRATION & PROCESSING
          </p>
          <p className="mt-3 font-semibold px-2">
            Seamlessly connect Excel with databases, APIs, and third-party tools
            to process large datasets efficiently. Ideal for predective
            analytics, forecasting and big data analysis
          </p>
        </div>
      </div>

      <div className="h-0.5 mt-14 rounded-full w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="m-11 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
          Different types of Charts
        </h1>
        <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-green-400 font-bold">
          Let's have some prerequisites knowledge about the different types of
          the 2D & 3D charts in the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
            Excel analytics platform
          </span>
        </p>
      </div>

      {/* Charts Section (Now inside header) */}
      <Charts />

      <div className="mt-4 mb-11 relative mx-auto shadow-xl shadow-orange-900 w-full max-w-screen-md">
        <img
          src={assets.free_trial_image}
          alt="Excel Background"
          className="w-full h-auto rounded-lg shadow-xl shadow-slate-950"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-black/50">
          <h1 className="text-4xl font-extrabold text-white text-center px-4">
            Start Smarter:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-500 via-orange-300 to-orange-400">
              Analyze faster
            </span>{" "}
          </h1>
          <h2 className="animate-ping text-2xl font-extrabold text-white text-center px-4">
            Start you free trial today only
          </h2>
          <p className="text-lg font-bold text-slate-50 text-center px-6">
            <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-blue-500 via-orange-300 to-orange-400">
              Unlock the full potential of your data with a free trial of Excel
              Analytics Platform.
            </span>{" "}
            Experience powerful visualizations and seamless Excel integration
            which are designed to help you turn spreadsheets into strategic
            decisions.
          </p>
          <button className="flex mt-4 flex-row items-center gap-3 rounded-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-7 py-2 shadow-xl shadow-cyan-800 duration-200 ease-in-out active:scale-90 animate-bounce cursor-pointer">
            <p className="text-lg font-bold">GET STARTED</p>
          </button>
        </div>
      </div>

      <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
    </div>
  );
};

export default Header;
