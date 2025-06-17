import React, { useContext } from "react";
import { BsBarChartFill } from "react-icons/bs";
import { PiNotepadBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin, setUserData } = useContext(AppContent);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/admin/adminLogout`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setIsLoggedin(false);
        setUserData(null);
        toast.success("Admin Logged out Successfully!");
        navigate("/adminLogin");
      } else {
        toast.error("Logout Failed. Try again!");
      }
    } catch (error) {
      toast.error("Logout error. Please try again!");
    }
  }

  return (
    <div className="bg-gradient-to-br from-pink-200 via-violet-200 to-cyan-300 p-8 flex justify-between items-center">
      {/* Admin Panel */}
      <div className="flex flex-row items-center gap-3 p-4 rounded-lg shadow-xl shadow-slate-800 min-w-min min-h-min">
        <RiAdminFill size={40}/>
        <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-violet-500 to-cyan-400 text-center">
          ADMIN PANEL
        </h1>
      </div>

      {/* History & Users */}
      <div className="flex flex-row items-center gap-3 p-4 rounded-lg shadow-xl shadow-slate-800 min-w-min min-h-min">
        <div
          onClick={() => navigate("/history")}
          className="flex flex-row items-center p-3 gap-3 rounded-lg shadow-xl shadow-slate-800 active:scale-90 duration-300 ease-in-out cursor-pointer"
        >
          <PiNotepadBold size={30} />
          <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-violet-500 to-cyan-400 text-center">
            2D CHART HISTORY
          </h1>
        </div>
        <div
          onClick={() => navigate("/3Dhistory")}
          className="flex flex-row items-center p-3 gap-3 rounded-lg shadow-xl shadow-slate-800 active:scale-90 duration-300 ease-in-out cursor-pointer"
        >
          <PiNotepadBold size={30} />
          <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-violet-500 to-cyan-400 text-center">
            3D CHART HISTORY
          </h1>
        </div>
        <div onClick={() => navigate("/userList")} className="flex flex-row items-center p-3 gap-3 rounded-lg shadow-xl shadow-slate-800 active:scale-90 duration-300 ease-in-out cursor-pointer">
          <FaUsers size={30} />
          <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-violet-500 to-cyan-400 text-center">
            USERS
          </h1>
        </div>
        <div onClick={() => navigate("/report")} className="flex flex-row items-center p-3 gap-3 rounded-lg shadow-xl shadow-slate-800 active:scale-90 duration-300 ease-in-out cursor-pointer">
          <BsBarChartFill size={30} />
          <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 via-violet-500 to-cyan-400 text-center">
            CHARTS
          </h1>
        </div>
      </div>

      {/* Logout Button */}
      <button
      onClick={handleLogout}
      className="flex flex-row gap-3 bg-gradient-to-bl from-red-500 via-red-600 to-red-700 items-center px-6 py-3 rounded-full shadow-xl shadow-slate-800 text-lg font-bold text-white hover:scale-105 transition-transform active:scale-95">
        <RiLogoutCircleLine size={30} className="text-black font-bold" />

        <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-500 to-cyan-400">
          LOGOUT
        </h1>
      </button>
    </div>
  );
};

export default AdminNavbar;
