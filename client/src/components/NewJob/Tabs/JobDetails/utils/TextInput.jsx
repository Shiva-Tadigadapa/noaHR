import React from "react";


const TextInput = ({ id, label, type = "text", req }) => (
  <div className="w-full flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-semibold">
      {label}
      {req && <span className="text-red-500"> *</span>}
    </label>
    <input
      type={type}
      id={id}
      className="py-2 px-4 border focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:bg-indigo-50/50 border-gray-300 rounded-md"
    />
  </div>
);

export default TextInput;