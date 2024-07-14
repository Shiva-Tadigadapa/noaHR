import React, { useState } from "react";
import Avatar from "boring-avatars";
import { FiEye } from "react-icons/fi"; // Importing Eye icon from React Icons

const JobCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg overflow-hidden cursor-pointer hover:bg-gray-50/10 transition-all delay-75 duration-300 bg-white border border-gray-200">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <Avatar
            size={40}
            name="Maria Mitchell"
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <h1 className="ml-3 text-lg font-semibold text-gray-800">
            Job Name goes here
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="px-2 py-1 text-xs rounded-md text-gray-900 bg-gray-100">
            <p>Not Yet Published</p>
          </div>
          <div className="px-2 py-1 text-xs rounded-md text-gray-900 bg-gray-100">
            <p>Full Time</p>
          </div>
          <div className="px-2 py-1 text-xs rounded-md text-gray-900 bg-gray-100">
            <p>Remote/Onsite</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="px-2 py-1 text-xs rounded-md text-gray-900 bg-gray-100">
            <p>JobId: 8465793</p>
          </div>
          <div className="relative flex items-center">
            <a
              href="#"
              className="flex items-center px-2 py-1 text-xs rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              <FiEye className="mr-1" /> Preview
            </a>
            <button
              onClick={toggleDropdown}
              className="ml-2 px-2 py-1 text-xs rounded-md text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              More
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                <button className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none">
                  Assign
                </button>
                <button className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none">
                  Delete
                </button>
                <button className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none">
                  Duplicate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
