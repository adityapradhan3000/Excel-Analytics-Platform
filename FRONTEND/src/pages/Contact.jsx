import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="relative px-5 w-screen min-h-screen overflow-hidden bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <img
        onClick={() => navigate("/home")}
        src={assets.excel_analytics_logo}
        alt=""
        className="h-24 w-24 absolute top-5 animate-pulse left-5 rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out cursor-pointer"
      />
      <h1 className="text-5xl animate-slideUp bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 font-extrabold text-center m-6">
        CONTACT US
      </h1>
      <button
        onClick={() => navigate("/home")}
        className="top-8 absolute animate-bounce right-14 rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
      >
        <p className="font-bold text-lg">BACK</p>
      </button>
      <div className="h-0.5 mt-16 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
      <div className="animate-slideUp mt-4 relative mx-auto w-screen max-w-screen-lg">
        <img
          src={assets.contact_us}
          alt="Excel Background"
          className="w-full opacity-65 h-auto rounded-lg shadow-xl shadow-slate-950"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-black/50">
          <h1 className="text-4xl font-extrabold text-white text-center px-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-500 via-orange-300 to-orange-400">
              CONTACT US
            </span>
          </h1>
          <p className="text-lg font-bold text-slate-50 text-center px-6">
            We're here to help! If you have any questions, feedback, or need
            assistance, please don't hesistate to reach out to us. Our team is
            dedicated to providing you with the best possible experience
          </p>
          <button className="flex flex-row items-center gap-3 rounded-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-7 py-2 shadow-xl shadow-cyan-800 duration-200 ease-in-out active:scale-90 animate-bounce cursor-pointer">
            <p className="text-lg font-bold">GET STARTED</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col animate-slideUp items-center gap-6 m-6 p-6 bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 rounded-xl shadow-xl shadow-orange-800 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold animate-bounce mt-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
          ENTER YOUT DETAILS
        </h1>
        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold text-slate-800">
            Your Name
          </label>
          <input
            type="text"
            className="w-full rounded-lg p-3 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-slate-900 placeholder:text-slate-50 font-bold shadow-xl shadow-slate-900"
            placeholder="Enter your name"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold text-slate-800">
            Your Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg p-3 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-slate-900 placeholder:text-slate-50 font-bold shadow-xl shadow-slate-900"
            placeholder="Enter your email address"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold text-slate-800">
            Subject
          </label>
          <input
            type="text"
            className="w-full rounded-lg p-3 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-slate-900 placeholder:text-slate-50 font-bold shadow-xl shadow-slate-900"
            placeholder="Enter the subject"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold text-slate-800">
            Your Message
          </label>
          <textarea
            rows={5}
            className="w-full rounded-lg p-3 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 text-slate-900 placeholder:text-slate-50 font-bold shadow-xl shadow-slate-900"
            placeholder="Type your message here"
          />
        </div>

        <button className="px-6 py-3 mt-4 rounded-lg shadow-xl shadow-orange-800 font-semibold bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 active:scale-90 duration-200 ease-in-out">
          <p className="text-lg font-bold text-slate-50">SEND MESSAGE</p>
        </button>
      </div>

      <div className="flex flex-col animate-slideUp rounded-xl shadow-lg shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 justify-center items-center m-6 p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 mb-6 text-center">
          SOME ADDITIONAL INFORMATION
        </h1>

        <div className="w-full space-y-4 text-center">
          <p className="text-lg font-medium text-slate-900 leading-relaxed">
            For general inquiries, you can also reach us at{" "}
            <span className="font-bold underline">
              support@excelanalytics.com
            </span>
            . Our support team is available{" "}
            <strong>Monday to Friday, 9AM to 6AM IST</strong>.
          </p>
          <p className="text-lg font-medium text-slate-900 leading-relaxed">
            If you prefer to speak with someone directly, you can call us at{" "}
            <span className="font-bold underline">23453-53233</span>. Phone
            support hours are the same as our email support hours.
          </p>
        </div>
      </div>
      <div className="h-0.5 mt-16 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <Footer />
    </div>
  );
};

export default Contact;
