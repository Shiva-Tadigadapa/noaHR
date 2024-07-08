import React from "react";

const SelectInputs = ({ id, label, options }) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-semibold">
      {label}
    </label>
    <select id={id} className="py-2 px-4 border border-gray-300 rounded-md">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInputs;