import React, { useState } from "react";

const SkillsInput = () => {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setSkills([...skills, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteSkill = (indexToDelete) => {
    setSkills(skills.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-semibold">Skills</label>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-2 items-center py-0.5 px-3 bg-indigo-200 rounded-lg"
          >
            <span className="">{skill}</span>
            <button
              type="button"
              onClick={() => handleDeleteSkill(index)}
              className=" text-2xl text-red-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:bg-indigo-50 py-2 px-4 border border-gray-300 rounded-md"
        placeholder="Type a skill and press Enter"
      />
    </div>
  );
};

export default SkillsInput;