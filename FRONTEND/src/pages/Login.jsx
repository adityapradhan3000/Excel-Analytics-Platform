import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { assets } from "../assets/assets";

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, setUserData } = useContext(AppContent);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and Password");
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      if (response.data.success) {
        setIsLoggedin(true);
        setUserData(response.data.user);
        toast.success("Login Successfull!");

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        toast.error(response.data.message || "Login Failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl mx-auto px-7 py-10 shadow-2xl shadow-orange-800 rounded-lg bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* LEFT: Login Form */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-3xl rounded-lg p-4 shadow-xl shadow-blue-600 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 mb-2">
              LOGIN PORTAL
            </h1>
            <p className="text-center text-lg text-gray-800 font-extrabold mb-6">
              Enter your credentials to access the analytics platform.
            </p>

            {/* Email */}
            <label className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 mb-2">
              EMAIL ID
            </label>
            <div className="flex items-center gap-2 mb-4">
              <MdEmail size={30} />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="flex-1 p-3 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                type="email"
                name="email"
                required
              />
            </div>

            {/* Password */}
            <label className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 mb-2">
              PASSWORD
            </label>
            <div className="flex items-center gap-2 mb-4">
              <RiLockPasswordFill size={30} />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="flex-1 p-3 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                type="password"
                name="password"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 animate-pulse w-full py-3 rounded-lg shadow-xl shadow-blue-600 text-white bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <h1 className="text-lg text-slate-950 font-bold">LOGIN</h1>
            </button>

            {/* Separator */}
            <div className="my-6 border border-gray-400" />

            <p className="animate-bounce text-center font-extrabold text-gray-800 mb-2">
              Don't have an account?
            </p>

            <div className="flex justify-between text-sm font-semibold text-slate-800">
              <p
                onClick={() => navigate("/register")}
                className="cursor-pointer hover:underline"
              >
                Create an Account
              </p>
            </div>
          </div>

          {/* RIGHT: Visual Panel */}
          <div className="animate-slideUp shadow-xl shadow-orange-800 w-full lg:w-1/2 relative">
            <img
              src={assets.login_page}
              alt="Excel Background"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg text-center p-6">
              <h2 className="text-3xl font-extrabold text-white mb-3">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400">
                  Excel Analytics
                </span>{" "}
                Platform
              </h2>
              <p className="text-white font-semibold">
                Empowering you with insights from your data, instantly and
                intelligently.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
