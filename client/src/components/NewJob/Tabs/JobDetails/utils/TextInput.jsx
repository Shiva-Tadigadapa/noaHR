import React from "react";

const TextInput = ({ id, label, type = "text" }) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="py-2 px-4 border border-gray-300 rounded-md"
    />
  </div>
);

export default TextInput;