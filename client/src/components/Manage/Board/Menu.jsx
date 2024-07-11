import React, { useState } from "react";
import { FaList, FaTh } from "react-icons/fa";
import { MdCompareArrows, MdAdd } from "react-icons/md";

const Menu = () => {
  const [view, setView] = useState("list"); // State to manage the view

  return (
    <div className="flex justify-between items-center p-4 bg-white border-slate-200/80 border-b">
      <div className="flex items-center space-x-4">
        {/* Candidate Stage Filter */}
        <div className="relative">
          <select className="p-2 border rounded">
            <option>All Candidates</option>
            <option>Rejected</option>
            <option>Interviewing</option>
            <option>Hired</option>
          </select>
        </div>

        {/* Source Filter */}
        <div className="relative">
          <select className="p-2 border rounded">
            <option>All Sources</option>
            <option>LinkedIn</option>
            <option>Careers</option>
            <option>Google Jobs</option>
            <option>Referral</option>
          </select>
        </div>

        <button className="p-2 border rounded bg-gray-200/60 hover:bg-gray-300">
          More Filters
        </button>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex gap-2">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${
              view === "list"
                ? "bg-black/80 text-white"
                : "bg-gray-200/50 hover:bg-gray-300"
            }`}
          >
            <FaList />
          </button>
          <button
            onClick={() => setView("board")}
            className={`p-2 rounded ${
              view === "board"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <FaTh />
          </button>
        </div>
        <button className="p-2 border rounded bg-gray-200/60 hover:bg-gray-300 flex items-center space-x-1">
          <MdCompareArrows />
          <span>Compare</span>
        </button>

        <button className="p-2 border rounded bg-black/80 text-white hover:bg-blue-700 flex items-center space-x-1">
          <MdAdd />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
