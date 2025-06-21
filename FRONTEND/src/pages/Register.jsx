import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContent } from "../context/AppContext";
import { assets } from "../assets/assets";

const Register = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, setUserData } = useContext(AppContent);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please enter all the details!");
      return;
    }

    try {
      const response = await axios.post(`${backendUrl}/api/auth/register`, {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setIsLoggedin(true);
        setUserData(response.data.user);
        toast.success("Registration successful!");
        // ✅ Wait briefly before navigating
        setTimeout(() => {
          navigate("/home");
        }, 1500); // 1.5 seconds is usually enough
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Registration Failed! Please try again");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="w-full m-10 max-w-5xl mx-auto px-7 py-10 shadow-2xl shadow-orange-800 rounded-lg bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-2xl shadow-xl shadow-slate-500 p-3">
                <h1 className="font-extrabold text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400">
                  SIGN UP PORTAL
                </h1>
              </div>

              {/* Centered Icon */}
              <div className="h-auto w-auto bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 flex justify-center items-center my-4 rounded-full p-3 shadow-lg shadow-slate-950">
                <BsPersonCircle size={50} />
              </div>

              <p className="text-md pt-4 text-center font-bold text-gray-800">
                Enter your credentials to create an account
              </p>
            </div>
            <div>
              <h3 className="pt-4 pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 text-xl">
                USERNAME
              </h3>
              <div className="flex items-center flex-row-reverse gap-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="flex-1 p-3 placeholder-slate-900 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <MdPerson size={30} />
              </div>
            </div>
            <div>
              <h3 className="pt-4 pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 text-xl">
                EMAIL ID
              </h3>
              <div className="flex items-center flex-row-reverse gap-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="flex-1 p-3 placeholder-slate-900 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                  type="text"
                  placeholder="Enter your email"
                  required
                />
                <MdEmail size={30} />
              </div>
            </div>
            <div>
              <h3 className="pt-4 pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-orange-300 to-orange-400 text-xl">
                PASSWORD
              </h3>
              <div className="flex items-center flex-row-reverse gap-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="flex-1 p-3 placeholder-slate-900 rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 shadow-xl shadow-blue-600 outline-none"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <RiLockPasswordFill size={30} />
              </div>
            </div>
            <div className="flex justify-center items-center pt-2">
              <button className="animate-pulse mt-5 w-full shadow-xl shadow-slate-700 p-2 rounded-lg text-lg font-bold bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 active:scale-95 duration-300 ease-in-out">
                REGISTER
              </button>
            </div>
            <div className="border-2 border-gray-900 rounded-xl mt-7"></div>
            <div className="flex justify-center items-center mt-3">
              <p className="text-slate-950 font-bold text-md">
                Already have an account!
              </p>
            </div>
            <div className="flex items-start justify-end mt-3">
              <p
                onClick={() => navigate("/")}
                className="font-semibold text-md text-slate-900 hover:cursor-pointer active:scale-95 duration-300 ease-in-out"
              >
                Login
              </p>
            </div>
          </div>

          <div className="animate-slideUp shadow-xl shadow-orange-800 w-full lg:w-1/2 relative">
            <img
              src={assets.registration_page}
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

export default Register;
