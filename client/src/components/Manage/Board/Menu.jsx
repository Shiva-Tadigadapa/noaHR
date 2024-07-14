import React, { useState } from "react";
import { FaList, FaTh } from "react-icons/fa";
import { MdCompareArrows, MdAdd } from "react-icons/md";
import SelectDropdown from "../../../utils/SelectDropdown";

const Menu = ({ onViewChange }) => {
  const [type, setType] = useState("allCandidates");
  const [source, setSource] = useState("allSources");
  const [view, setView] = useState("list");

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };

  const handleSourceChange = (selectedSource) => {
    setSource(selectedSource);
  };

  const handleViewChange = (selectedView) => {
    setView(selectedView);
    onViewChange(selectedView);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-slate-200/80 border-b">
      <div className="flex items-center space-x-4">
        {/* Candidate Stage Filter */}
        <SelectDropdown
          options={[
            { value: "allCandidates", label: "All Candidates" },
            { value: "Rejected", label: "Rejected" },
            { value: "Interviewing", label: "Interviewing" },
            { value: "Hired", label: "Hired" },
          ]}
          label="Type"
          value={type}
          onChange={handleTypeChange}
        />

        {/* Source Filter */}
        <SelectDropdown
          options={[
            { value: "allSources", label: "All Sources" },
            { value: "linkedin", label: "LinkedIn" },
            { value: "careers", label: "Careers" },
            { value: "google jobs", label: "Google Jobs" },
            { value: "referral", label: "Referral" },
          ]}
          label="Source"
          value={source}
          onChange={handleSourceChange}
        />

        <button className="p-2  border rounded bg-gray-200/60 hover:bg-gray-300">
          MoreFilters
        </button>
      </div>

      <div className="flex  gap-3">
        {/* View Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => handleViewChange("list")}
            className={`px-3 text-xl rounded ${
              view === "list"
                ? "bg-black/80 text-white"
                : "bg-gray-200/50 hover:bg-gray-300"
            }`}
          >
            <FaList />
          </button>
          <button
            onClick={() => handleViewChange("board")}
            className={`px-3 text-xl rounded ${
              view === "board"
                ? "bg-zinc-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <FaTh />
          </button>
        </div>

        {/* Compare and Add Buttons */}
        <button className="p-2 px-4 border rounded-lg bg-gray-200/60 hover:bg-gray-300 flex items-center space-x-1">
          <MdCompareArrows />
          <span>Compare</span>
        </button>
        <button className="p-2 px-6 border rounded-lg bg-black/80 text-white hover:bg-blue-700 flex items-center space-x-1">
          <MdAdd />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
