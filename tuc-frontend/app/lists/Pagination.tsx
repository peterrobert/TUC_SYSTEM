import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mb-8">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 cursor-not-allowed"
        disabled
      >
        <i className="fa-solid fa-chevron-left text-sm"></i>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-600 text-white font-medium shadow-md shadow-purple-600/20">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">
        3
      </button>
      <span className="text-gray-400 px-2">...</span>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors">
        12
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
        <i className="fa-solid fa-chevron-right text-sm"></i>
      </button>
    </div>
  );
};

export default Pagination;
