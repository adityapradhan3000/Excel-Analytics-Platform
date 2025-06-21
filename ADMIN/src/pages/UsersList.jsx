import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { TiUserDelete } from "react-icons/ti";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const navigate = useNavigate();

  const { backendUrl } = useContext(AppContent);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/auth/getUsers`);
        if (res.data.success && Array.isArray(res.data.users)) {
          setUsers(res.data.users);
          toast.success("All users credentials are fetched successfully!");
        } else {
          setUsers([]);
          toast.warn("No users found.");
        }
      } catch (error) {
        toast.error("Failed to fetch Users credentials!");
        console.error("User fetch error:", error);
      }
    };

    fetchUsers();
  }, [backendUrl]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${backendUrl}/api/auth/deleteUsers/${id}`
      );
      if (res.data.success) {
        toast.success("User credentials deleted successfully!");
        setUsers((prev) => prev.filter((u) => u._id !== id));
      } else {
        toast.error("Failed to delete User credentials!");
      }
    } catch (error) {
      toast.error("Error occurred while deleting the user data!");
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 overflow-auto">
      <ToastContainer />
      <img
        onClick={() => navigate("/home")}
        src={assets.excel_analytics_logo}
        alt=""
        className="h-24 w-24 animate-pulse absolute top-8 left-5 rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out cursor-pointer"
      />
      <h1 className="text-5xl animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600 font-extrabold text-center m-6">
        USERS INFORMATION LIST
      </h1>
      <button
        onClick={() => navigate("/home")}
        className="top-8 animate-bounce right-14 absolute rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
      >
        <p className="font-bold text-lg">BACK</p>
      </button>
      <p className="text-xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-blue-400 to-green-900">
        All users registration details list are saved here
      </p>
      <div className="h-0.5 mt-10 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>

      <div className="flex mt-5 flex-col items-center animate-slideUp justify-center gap-2 p-4 bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 bg-opacity-30 rounded-lg shadow-xl shadow-orange-800 max-w-xs mx-auto">
        <img
          src={assets.users_list}
          alt="User icon"
          className="rounded-lg shadow-xl shadow-orange-800 object-contain"
        />
        <p className="text-xl font-extrabold text-slate-950">
          Total Registered Users
        </p>
        <p className="text-4xl font-bold text-slate-900">{users.length}</p>
      </div>

      <div className="overflow-x-auto m-6 shadow-xl shadow-orange-800 rounded-lg">
        <table className="min-w-full animate-slideUp table-auto text-left bg-white rounded-lg">
          <thead className="bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 text-indigo-900 font-bold">
            <tr>
              <th className="px-6 py-3 text-lg font-bold">USER NAME</th>
              <th className="px-6 py-3 text-lg font-bold">USER EMAIL-ID</th>
              <th className="px-6 py-3 text-lg font-bold">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-slate-100 bg-gradient-to-r from-blue-400 via-orange-400 to-orange-500 transition duration-200"
              >
                <td className="px-6 py-4 font-extrabold text-slate-800">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-slate-700 font-bold">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(chart._id)}
                    className="p-2 rounded-lg shadow-md text-slate-700 hover:text-slate-950 hover:scale-105 transition duration-200"
                  >
                    <TiUserDelete size={40} />
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 px-6 py-4">
                  No users registered till now
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
