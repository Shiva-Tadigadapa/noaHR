import React from "react";
import { FaUserCircle, FaCog, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white w-full shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-xl font-semibold">
              noaHR{" "}
              <span className="font-normal text-gray-600">
                / Full Stack Developer
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
          </div>
          <button className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-700 transition-all duration-300">
            Edit Job
          </button>
          <FaUserCircle className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300" />
          <FaCog className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
