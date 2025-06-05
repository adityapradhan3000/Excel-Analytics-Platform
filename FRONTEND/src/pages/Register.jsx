import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-pink-200 via-violet-200 to-cyan-300">
      <div className="w-3/4 max-w-lg p-8 max-md:m-6 shadow-2xl shadow-slate-950 rounded-lg">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-2xl shadow-xl shadow-slate-500 p-3">
              <h1 className="font-extrabold text-center text-3xl bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text">
                SIGN UP PORTAL
              </h1>
            </div>

            {/* Centered Icon */}
            <div className="h-auto w-auto flex justify-center items-center my-4 rounded-full p-3 shadow-lg shadow-slate-950">
              <BsPersonCircle size={50} />
            </div>

            <p className="text-md pt-4 text-center font-bold text-gray-800">
              Enter your credentials to create an account
            </p>
          </div>
          <div>
            <h3 className="pt-4 pb-3 font-extrabold bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text text-xl">
              USERNAME
            </h3>
            <div className="flex flex-row-reverse gap-2">
              <input
                className="p-3 w-full h-8 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out"
                type="text"
              />
              <MdPerson size={30} />
            </div>
          </div>
          <div>
            <h3 className="pt-4 pb-3 font-extrabold bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text text-xl">
              EMAIL ID
            </h3>
            <div className="flex flex-row-reverse gap-2">
              <input
                className="p-3 w-full h-8 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out"
                type="text"
              />
              <MdEmail size={30} />
            </div>
          </div>
          <div>
            <h3 className="pt-4 pb-3 font-extrabold bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text text-xl">
              PASSWORD
            </h3>
            <div className="flex flex-row-reverse gap-2">
              <input
                className="p-3 w-full h-8 rounded-xl shadow-xl shadow-slate-500 active:scale-95 duration-500 ease-in-out"
                type="password"
              />
              <RiLockPasswordFill size={30} />
            </div>
          </div>
          <div className="flex justify-center items-center pt-2">
            <button className="mt-5 w-full shadow-xl shadow-slate-700 p-2 rounded-lg text-lg font-bold bg-gradient-to-r from-violet-300 via-pink-300 to-cyan-300 active:scale-95 duration-300 ease-in-out">
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
              onClick={() => navigate("/login")}
              className="font-semibold text-md text-slate-900 hover:cursor-pointer active:scale-95 duration-300 ease-in-out"
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
