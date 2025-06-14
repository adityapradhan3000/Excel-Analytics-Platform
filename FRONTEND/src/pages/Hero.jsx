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
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-200 via-violet-200 to-cyan-300 gap-4">
        <ToastContainer />
        <div className="flex flex-row justify-center items-center mb-6 p-4 shadow-xl shadow-slate-700 rounded-lg text-2xl font-extrabold bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text">
          Welcome
        </div>
        <div className="flex flex-row justify-evenly gap-5 items-center">
          <div className="flex flex-col items-center justify-center shadow-xl shadow-slate-700 border rounded-lg p-9 gap-4">
            <p className="font-extrabold text-center text-3xl bg-gradient-to-r from-violet-900 via-pink-400 to-cyan-700 text-transparent bg-clip-text">
              UPLOAD YOUR FILE
            </p>
            <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 shadow-xl shadow-slate-700 font-bold rounded-md hover:bg-blue-700 hover:duration-200 active:scale-95 duration-200 ease-in-out">
              <FaFileUpload size={20} className="inline mr-2" />
              <input
                type="file"
                accept=".xls,.xlsx,.csv"
                className="hidden"
                onChange={handleFileUpload}
              />
              UPLOAD FILE
            </label>
            <button
              className="bg-green-500 text-white px-4 py-2 shadow-xl font-bold hover:bg-green-700 hover:duration-200 shadow-slate-700 rounded-md active:scale-95 duration-200 ease-in-out"
              onClick={handlePreview}
            >
              PREVIEW
            </button>
          </div>
          <div className="shadow-xl shadow-slate-900 gap-3 p-4 rounded-lg flex flex-col justify-center items-center">
            <div className="flex flex-row-reverse justify-evenly items-center gap-3 mb-3">
              <h1 className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-br from-violet-900 via-pink-400 to-cyan-700">
                IMPORTANT POINTS
              </h1>
              <MdOutlineNotificationImportant size={30} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-md">
                Supported formats:{" "}
                <span className="text-lg font-bold">.xls</span>,{" "}
                <span className="text-lg font-bold">.xlsx</span>,{" "}
                <span className="text-lg font-bold">.csv</span>
              </p>
              <GrWaypoint size={20} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-md">
                Once the sheet is uploaded, the system will display a preview of
                the contents
              </p>
              <GrWaypoint size={20} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-md">
                Click on the{" "}
                <span className="font-bold text-lg">"Analyze"</span> button to
                proceed
              </p>
              <GrWaypoint size={20} />
            </div>
            <div className="gap-3 flex flex-row-reverse justify-end items-center">
              <p className="text-md">
                Any other file format will be invalid and trigger an error or
                exception
              </p>
              <IoIosWarning size={20} />
            </div>
          </div>
        </div>

        {showPreview && data.length > 0 && (
          <div className="w-3/4 max-w-4xl bg-gradient-to-r from-violet-200 via-pink-200 to-cyan-200 p-4 shadow-lg rounded-lg overflow-auto">
            <table className="w-full rounded-lg border-collapse border shadow-xl shadow-slate-600 border-gray-400">
              {/* Extract and display headers */}
              <thead>
                <tr className="border border-slate-800 bg-gray-300 font-bold">
                  {Object.keys(data[0]).map((header, index) => (
                    <th
                      key={index}
                      className="px-4 py-2 border border-slate-800"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border border-slate-800">
                    {Object.values(row).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-2 border border-slate-800"
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
          className="rounded-lg shadow-xl font-bold shadow-slate-700 p-3 min-h-0 min-w-0 active:scale-95 duration-200 ease-in-out bg-blue-500 text-white cursor-pointer"
        >
          ANALYZE THE CHART
        </button>
      </div>
    </>
  );
};

export default FileUploader;
