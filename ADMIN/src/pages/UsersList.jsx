import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";

const UsersList = () => {
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
        }
      } catch (error) {
        toast.error("Failed to fetch Users credentials!");
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
        toast.success("Users Credentials deleted Successfully!");
        setUsers((prev) => prev.filter((chart) => chart._id !== id));
      } else {
        toast.error("Failed to delete User credentials!");
      }
    } catch (error) {
      toast.error("Error occurred in deleting the user data!");
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-pink-200 via-violet-400 to-cyan-400 overflow-auto">
      <ToastContainer />
      <h1 className="text-3xl mt-6 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700 mb-6">
        USERS INFORMATION LIST
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 m-6 gap-6">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-pink-200 via-violet-300 to-cyan-400 shadow-xl shadow-slate-800 rounded-lg p-6"
            >
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(user._id)}
                className="absolute top-8 p-2 rounded-lg shadow-xl shadow-slate-800 right-5 hover:text-red-800"
              >
                <TiUserDelete size={28} />
              </button>

              <h2 className="flex flex-row gap-3 items-center text-xl font-semibold text-indigo-800">
                <span className="text-xl font-extrabold">USER NAME</span>
                <FaArrowRight /> {user.name}
              </h2>
              <h3 className="flex flex-row items-center gap-3 mt-2">
                <span className="text-lg font-extrabold">EMAIL ID</span>
                <FaArrowRight /> {user.email}
              </h3>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold text-gray-700 col-span-full">
            No user data available.
          </p>
        )}
      </div>
    </div>
  );
};

export default UsersList;
