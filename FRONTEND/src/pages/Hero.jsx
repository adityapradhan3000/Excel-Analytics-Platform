import React, { useContext, useState } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";
import { FaFileUpload } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { GrWaypoint } from "react-icons/gr";
import { IoIosWarning } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { assets } from "../assets/assets";

const FileUploader = () => {
  const { userData } = useContext(AppContent);

  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (!uploadedFile) return;

    const fileType = uploadedFile.name.split(".").pop().toLowerCase();
    if (!["xls", "xlsx", "csv"].includes(fileType)) {
      toast.error(
        "Only Excel (.xls, .xlsx) or CSV (.csv) file are not allowed!"
      );
      return;
    }

    setFile(uploadedFile);
    setShowPreview(false);
    toast.success("File uploaded successfully!");
  };

  const handlePreview = () => {
    if (!file) {
      toast.error("Please upload a file first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileType = file.name.split(".").pop().toLowerCase();
      let parsedData = [];

      if (fileType === "csv") {
        const csvData = Papa.parse(event.target.result, { header: true }).data;
        parsedData = csvData.filter((row) =>
          Object.values(row).some((cell) => cell !== "")
        ); // Removes empty rows
      } else {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        parsedData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      }

      if (parsedData.length === 0) {
        toast.error(
          "Invalid or empty file. Please upload a valid Excel/CSV file."
        );
        return;
      }

      setData(parsedData);
      setShowPreview(true);
      localStorage.setItem("uploadedData", JSON.stringify(parsedData)); // Save the cleaned data
      toast.success("Preview generated successfully!");
    };

    file.name.endsWith(".csv")
      ? reader.readAsText(file)
      : reader.readAsBinaryString(file);
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900 gap-4">
        {" "}
        <ToastContainer />
        <img onClick={() => navigate("/home")} src={assets.excel_analytics_logo} alt="" className="h-24 w-24 absolute top-2 left-5 rounded-lg shadow-xl shadow-orange-700 active:scale-90 duration-200 ease-in-out cursor-pointer"/>
        <h1 className="animate-pulse text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-orange-500 to-orange-600">
          WELCOME TO UPLOAD SECTION
        </h1>
        <button
          onClick={() => navigate("/home")}
          className="absolute top-5 right-14 rounded-full shadow-xl shadow-orange-800 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 px-9 py-2"
        >
          <p className="font-bold text-lg">BACK</p>
        </button>
        <div className="h-0.5 mt-10 w-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"></div>
        <div className="flex flex-col m-4 justify-evenly gap-5 items-center">
          <div className="flex w-full animate-slideUp flex-col items-center justify-center shadow-xl bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 shadow-orange-800 rounded-lg p-9 gap-4">
            <p className="font-extrabold text-center text-3xl bg-gradient-to-r from-gray-500 via-slate-700 to-slate-700 text-transparent bg-clip-text">
              UPLOAD YOUR FILE
            </p>
            <p className="text-lg font-bold">
              Browse and drop your excel file here in the box in order to upload
              the file.
            </p>

            <label className="cursor-pointer bg-blue-500 text-white animate-bounce px-4 py-2 shadow-xl shadow-slate-700 font-bold rounded-md hover:bg-blue-700 hover:duration-200 active:scale-95 duration-200 ease-in-out">
              <FaFileUpload size={20} className="inline mr-2" />
              <input
                type="file"
                accept=".xls,.xlsx,.csv"
                className="hidden"
                onChange={handleFileUpload}
              />
              UPLOAD FILE
            </label>
          </div>
          <div className="shadow-xl animate-slideUp bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 shadow-orange-800 gap-3 p-4 rounded-lg flex flex-col justify-center items-center">
            <div className="flex flex-row-reverse justify-evenly items-center gap-3 mb-3">
              <h1 className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-slate-700 to-slate-700">
                IMPORTANT POINTS
              </h1>
              <MdOutlineNotificationImportant size={30} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-lg">
                Supported formats:{" "}
                <span className="text-lg font-bold">.xls</span>,{" "}
                <span className="text-lg font-bold">.xlsx</span>,{" "}
                <span className="text-lg font-bold">.csv</span>
              </p>
              <GrWaypoint size={20} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-lg font-semibold">
                Once the sheet is uploaded, the system will display a preview of
                the contents
              </p>
              <GrWaypoint size={20} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-lg font-semibold">
                Click on the{" "}
                <span className="font-bold text-lg">"Analyze"</span> button to
                proceed
              </p>
              <GrWaypoint size={20} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-lg font-semibold">
                Any other file format will be invalid and trigger an error or
                exception
              </p>
              <IoIosWarning size={40} className="animate-pulse"/>
            </div>
          </div>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 shadow-xl font-bold hover:bg-green-700 hover:duration-200 shadow-orange-700 rounded-md active:scale-95 duration-200 ease-in-out"
          onClick={handlePreview}
        >
          PREVIEW
        </button>
        {showPreview && data.length > 0 && (
          <div className="w-3/4 max-w-4xl bg-gradient-to-r from-blue-600 via-orange-500 to-orange-600 p-4 shadow-xl shadow-orange-800 rounded-lg">
            <table className="w-full rounded-lg shadow-xl shadow-orange-800 border-gray-400">
              {/* Extract and display headers */}
              <thead>
                <tr className="bg-gradient-to-r rounded-lg from-blue-600 via-orange-500 to-orange-600 font-extrabold">
                  {Object.keys(data[0]).map((header, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 border-2 rounded-lg border-slate-800"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="rounded-lg">
                    {Object.values(row).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-2 border-2 border-slate-800"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <button
          onClick={() => {
            if (!file) {
              toast.error("Please upload a file before proceeding!");
              return;
            }
            navigate("/analysis");
          }}
          className="animate-bounce m-4 rounded-lg shadow-xl bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 font-bold shadow-orange-700 p-3 min-h-0 min-w-0 active:scale-95 duration-200 ease-in-out cursor-pointer"
        >
          <p className="text-slate-900">ANALYZE THE CHART</p>
        </button>
      </div>
    </>
  );
};

export default FileUploader;
