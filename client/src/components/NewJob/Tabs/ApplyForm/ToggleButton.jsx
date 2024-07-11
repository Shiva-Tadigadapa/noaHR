import React from "react";

const ToggleButton = ({ label, value, onChange, selected }) => (
  <button
    onClick={onChange}
    className={`py-1.5 text-sm px-6 border rounded-lg ${selected ? "bg-zinc-900 text-white" : "bg-zinc-200 border border-black/20 text-black"
      }`}
  >
    {label}
  </button>
);

export default ToggleButton;
