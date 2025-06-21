import React, { useContext, useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../assets/assets";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, setUserData } = useContext(AppContent);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/admin/adminLogin`,
        { email, password },
        { withCredentials: true }
      );

      if (response.data.success && response.data.user) {
        setIsLoggedin(true);
        setUserData(response.data.user);
        toast.success("Login Successful!");

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl mx-auto px-7 py-10 rounded-lg shadow-2xl shadow-orange-800 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900 text-white"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SECTION - Login Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl rounded-lg p-4 shadow-xl shadow-blue-600 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400">
              ADMIN LOGIN PORTAL
            </h1>
            <p className="text-sm text-center text-slate-900 font-extrabold">
              Enter your credentials to access the analytics platform.
            </p>

            {/* Email Field */}
            <div>
              <label className="block text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 mb-1">
                EMAIL ID
              </label>
              <div className="flex items-center gap-2">
                <MdEmail size={30} className="text-slate-900" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="flex-1 p-3 text-slate-950 font-bold rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 mb-1">
                PASSWORD
              </label>
              <div className="flex items-center gap-2">
                <RiLockPasswordFill size={30} className="text-slate-900" />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="flex-1 p-3 text-slate-950 font-bold rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                  type="password"
                  name="password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 animate-pulse w-full py-3 rounded-lg shadow-xl shadow-blue-600 text-white bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <h1 className="text-lg text-slate-950 font-bold">LOGIN</h1>
            </button>
          </div>

          {/* RIGHT SECTION - Welcome Image */}
          <div className="w-full lg:w-1/2 relative animate-slideUp shadow-xl shadow-orange-800 rounded-lg overflow-hidden">
            <img
              src={assets.admin_page}
              alt="Excel Admin Background"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-2xl font-extrabold text-white mb-2">
                Welcome to the Admin Portal of{" "}
                <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400">
                  Excel Analytics
                </span>
              </h2>
              <p className="text-white text-md font-bold">
                Secure access to the analytics command center—log in as admin to
                manage insights and take control.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
