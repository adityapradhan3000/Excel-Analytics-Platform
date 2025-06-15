import React, { useContext, useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

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
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-pink-200 via-violet-200 to-cyan-300">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="w-3/4 max-w-lg p-8 max-md:m-6 shadow-2xl shadow-slate-950 rounded-lg"
      >
        <div className="flex flex-col justify-center">
          <div className="rounded-2xl shadow-xl shadow-slate-500 p-3">
            <h1 className="font-extrabold text-center text-3xl bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text">
              ADMIN LOGIN PORTAL
            </h1>
          </div>
          <p className="text-md pt-4 text-center font-bold text-gray-800">
            Enter your credentials to access the analytics platform.
          </p>

          <h3 className="pt-4 pb-3 font-extrabold bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text text-xl">
            EMAIL ID
          </h3>
          <div className="flex flex-row-reverse gap-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-5 w-full h-8 rounded-xl shadow-xl shadow-slate-500"
              type="email"
              name="email"
              required
            />
            <MdEmail size={30} />
          </div>

          <h3 className="pt-4 pb-3 font-extrabold bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text text-xl">
            PASSWORD
          </h3>
          <div className="flex flex-row-reverse gap-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-5 w-full h-8 rounded-xl shadow-xl shadow-slate-500"
              type="password"
              name="password"
              required
            />
            <RiLockPasswordFill size={30} />
          </div>

          <div className="flex justify-center items-center pt-2">
            <button
              type="submit"
              className="mt-5 w-full shadow-xl shadow-slate-700 p-2 rounded-lg text-lg font-bold bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 active:scale-95 duration-300 ease-in-out"
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;