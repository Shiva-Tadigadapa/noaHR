import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { CgDetailsMore } from "react-icons/cg";
import { CiPaperplane } from "react-icons/ci";
import { MdSettings, MdHelp } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const icons = [
    { label: "Overview", icon: <SlSpeedometer className="text-2xl" /> },
    { label: "Candidates", icon: <FaUsers className="text-2xl" /> },
    { label: "Interview Plan", icon: <CiPaperplane className="text-2xl" /> },
    { label: "Job Details", icon: <CgDetailsMore className="text-2xl" /> },   
  ];

  return (
    <div className="h-screen top-0 sticky bg-white border rounded p-4">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`mb-4 cursor-pointer my-10 ${
            activeTab === item.label ? "text-blue-600" : "text-gray-600"
          }`}
          data-tip={item.label}
          onClick={() => setActiveTab(item.label)}
        >
          {item.icon}
        </div>
      ))}
      <Tooltip />
    </div>
  );
};

export default Sidebar;
