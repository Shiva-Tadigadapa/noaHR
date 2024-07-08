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
      <div className="flex flex-wrap space-x-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center py-1 px-3 bg-gray-200 rounded-md"
          >
            <span className="mr-2">{skill}</span>
            <button
              type="button"
              onClick={() => handleDeleteSkill(index)}
              className="text-red-500"
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
        className="py-2 px-4 border border-gray-300 rounded-md"
        placeholder="Type a skill and press Enter"
      />
    </div>
  );
};

export default SkillsInput;