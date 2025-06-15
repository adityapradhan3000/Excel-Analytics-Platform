import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const AdminFooter = () => {
  return (
    <div className="bg-gradient-to-tr from-pink-200 via-violet-200 to-cyan-300">
      <div className=" flex flex-col p-8">
        <div className="flex flex-row items-center justify-between">
            <div className="p-3 grid grid-cols-2 gap-5">
                <div className="p-4 rounded-lg justify-center shadow-xl shadow-slate-700 flex flex-row gap-3 items-center active:scale-90 duration-300 ease-in-out cursor-pointer">
                    <IoMdDocument size={30}/>
                    <p className="font-bold text-lg">DOCUMENTATION</p>
                </div>
                <div className="p-4 rounded-lg justify-center shadow-xl shadow-slate-700 flex flex-row gap-3 items-center active:scale-90 duration-300 ease-in-out cursor-pointer">
                    <MdPrivacyTip size={30}/>
                    <p className="font-bold text-lg">PRIVACY POLICY</p>
                </div>
                <div className="p-4 rounded-lg justify-center shadow-xl shadow-slate-700 flex flex-row gap-3 items-center active:scale-90 duration-300 ease-in-out cursor-pointer">
                    <IoTerminal size={30}/>
                    <p className="font-bold text-lg">TERMS & CONDITIONS</p>
                </div>
                <div className="p-4 justify-center rounded-lg shadow-xl shadow-slate-700 flex flex-row gap-3 items-center active:scale-90 duration-300 ease-in-out cursor-pointer">
                    <IoCall size={30}/>
                    <p className="font-bold text-lg">CONTACT</p>
                </div>

            </div>
            <div className="flex flex-col gap-4 items-start">
          <p className="text-lg font-bold text-gray-900 shadow-md p-2 rounded-lg shadow-gray-500">
            Connect with us
          </p>

          <div className="flex flex-col gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg shadow-xl shadow-blue-600 gap-3 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <FaInstagramSquare size={40} className="text-pink-600" />
              <span className="text-gray-900 font-semibold text-lg">Instagram</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg gap-3 shadow-xl shadow-green-600 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <FaSquareWhatsapp size={40} className="text-green-600" />
              <span className="text-gray-900 font-semibold text-lg">WhatsApp</span>
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 rounded-lg shadow-xl shadow-blue-600 gap-3 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <FaSquareXTwitter size={40} className="text-blue-600" />
              <span className="text-gray-900 font-semibold text-lg">Twitter</span>
            </a>
          </div>
        </div>
        </div>
      </div>
      <div>
        <p className="text-center py-4 text-sm md:text-base text-gray-900 font-semibold">
        © 2025 Admin Dashboard Excel Analytics Platform - All Rights Reserved
      </p>
      </div>
    </div>
  );
};

export default AdminFooter;
