import React from "react";
import { useNavigate } from "react-router-dom";

const ChartCard = ({ chart }) => {
  const { title, description, category, _id } = chart;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/chart/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow-xl shadow-orange-900 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400"
    >
      {/* Category Label */}
      <span className="ml-5 mt-4 px-3 py-1 inline-block rounded-full bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400 text-gray-700 text-md font-bold">
        {category}
      </span>

      {/* Content */}
      <div className="p-6 bg-gradient-to-r from-blue-400 via-orange-300 to-orange-400">
        <h5 className="mb-2 text-lg font-semibold text-gray-900">{title}</h5>
        <p className="mb-3 text-md font-bold text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ChartCard;
