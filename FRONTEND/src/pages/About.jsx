import React from "react";
import { assets } from "../assets/assets";
import { FaUsers } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FaChartSimple } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative px-5 w-screen min-h-screen overflow-hidden bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <h1 className="animate-pulse text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-orange-400 to-yellow-400 text-center mt-8 mb-6">
        ABOUT US
      </h1>

      <button
        onClick={() => navigate("/home")}
        className="absolute top-11 right-24 rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
      >
        <p className="font-bold text-lg">BACK</p>
      </button>

      <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="animate-slideUp mt-4 relative mx-auto w-screen max-w-screen-lg">
        <img
          src={assets.about_us}
          alt="Excel Background"
          className="w-full h-auto rounded-lg shadow-xl shadow-orange-800"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-black/50">
          <h1 className="text-4xl font-extrabold text-white text-center px-4">
            Visualize your data with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-500 via-orange-300 to-orange-400">
              Excel analytics
            </span>{" "}
            Platform
          </h1>
          <p className="text-lg font-bold text-slate-50 text-center px-6">
            Transform your Excel data into the stunning 2D and 3D charts with
            Excel analytics Pro version. Our intuitive platform makes data
            analysus and visualization accessible to everyone
          </p>
          <button className="flex flex-row items-center gap-3 rounded-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-7 py-2 shadow-xl shadow-cyan-800 duration-200 ease-in-out active:scale-90 animate-bounce cursor-pointer">
            <p className="text-lg font-bold">GET STARTED</p>
          </button>
        </div>
      </div>

      <div className="mx-52 mt-11 flex flex-col gap-4 justify-center item-start p-4">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
          About Excel Analytics Platform Pro Version
        </h1>
        <p className="text-lg font-bold">
          Excel analytics platform pro is a cutting_edge platform designed to
          revolutionize how you interact with your excel data. Our mission is to
          empower users of all skill levels to unlock the full potential of
          their data through intuitive and powerful visualization tools. With
          the Excel analytics platform Pro, you can effortlessly transform
          complex spreadsheets into clear, compelling 2D & 3D charts that reveal
          hidden insights and drive informed decision-making
        </p>
      </div>

      <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="m-11 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl animate-bounce rounded-xl font-bold p-5 shadow-xl shadow-orange-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
          Key Features
        </h1>
        <p className="text-2xl font-bold">
          Explore most exciting features of your own{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
            Excel analytics platform Pro Version
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-9 ml-36 mb-6 justify-center items-center">
        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <FaUsers size={50} className="animate-pulse" />
          <p className="mt-4 text-xl font-bold">INCREASED COLLABORATION</p>
          <p className="mt-3 font-semibold px-2">
            Facilitate collaboration amonng the team members by providing a
            shared platform for data visualization and analysis, fostering
            better communication and alignment
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <IoTime size={50} className="animate-pulse" />

          <p className="mt-4 text-xl font-bold">TIME SAVINGS</p>
          <p className="mt-3 font-semibold px-2">
            Streamline you data analysis workflow with our user-friendly
            interface and automated features, saving your time and effort
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <FaSearch size={50} className="animate-pulse" />

          <p className="mt-4 text-xl font-bold">IMPROVISED DECISION-MAKING</p>
          <p className="mt-3 font-semibold px-2">
            Make more informed decision beased on a deeper understanding of your
            data, loading to better outcomes and strategic advantages.
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <BsTools size={50} className="animate-pulse" />

          <p className="mt-4 text-xl font-bold">COLLABORATION TOOLS</p>
          <p className="mt-3 font-semibold px-2">
            Collaborate with your team on data analysis and visualization
            projects in real-time share your charts and dashboards with
            colleagues, clients or stakeholders, and work together to interpret
            findings and draw conclusions
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <FaChartSimple size={50} className="animate-pulse" />

          <p className="mt-4 text-xl font-bold">ENHANCED DATA UNDERSTANDING</p>
          <p className="mt-3 font-semibold px-2">
            Visualize complex data sets in a clear and intuitive manner, making
            it easier to identify trends, patters and outliers.
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <MdOutlineSecurity size={50} className="animate-pulse" />
          <p className="mt-4 text-xl font-bold">SECURITY</p>
          <p className="mt-3 font-semibold px-2">
            At Excel Analytics Platform, we prioritize your security with
            end-to-end encryption, strict access control, and secure data
            transmission protocols
          </p>
        </div>
      </div>

      <div className="h-0.5 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="m-11 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl animate-bounce rounded-xl font-bold p-5 shadow-xl shadow-orange-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
          Meet Our Team Members
        </h1>
        <p className="text-2xl font-bold">
          Here is our members of our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
            Excel analytics platform
          </span>
        </p>
      </div>

      <div className="flex flex-row justify-evenly items-center m-3 p-3">
        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <FaUserCircle size={50} />
          <p className="mt-3 text-xl font-extrabold px-2">
            Aditya Kumar Pradhan
          </p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <FaUserCircle size={50} />
          <p className="mt-3 text-xl font-extrabold px-2">Aastha Kapoor</p>
        </div>

        <div className="bg-gradient-to-r p-7 hover:scale-105 hover:rotate-6 transition-transform duration-300 cursor-pointer from-blue-400 via-orange-300 to-orange-400 shadow-xl rounded-lg shadow-slate-900 flex flex-col justify-center items-center text-center max-w-xs">
          <FaUserCircle size={50} />
          <p className="mt-3 text-xl font-extrabold px-2">
            Tammineedi Pranavya
          </p>
        </div>
      </div>

      <div>
        <p className="text-xl font-bold p-4 rounded-lg shadow-xl shadow-orange-800">
          Our team composed of providing top-notch data visualization solutions.
          We are passionate about helping businesses unlock the power of their
          data throgh intuitive and insightful charts
        </p>
      </div>

      <div className="mt-16 mb-11 relative mx-auto shadow-xl shadow-orange-900 w-full max-w-screen-md">
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

      <Footer />
    </div>
  );
};

export default About;
