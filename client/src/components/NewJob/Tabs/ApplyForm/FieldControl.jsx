import React from "react";
import ToggleButton from "./ToggleButton";

const FieldControl = ({
  label,
  value,
  onChangeRequired,
  onChangeOptional,
  onChangeOff,
}) => (
  <div className="w-1/2 flex justify-between items-center border-b py-2 gap-3">
    <label className="text-md font-semibold">{label}</label>
    <div className="flex space-x-4">
      <ToggleButton
        label="Required"
        selected={value === "required"}
        onChange={onChangeRequired}
      />
      <ToggleButton
        label="Optional"
        selected={value === "optional"}
        onChange={onChangeOptional}
      />
      <ToggleButton
        label="Off"
        selected={value === "off"}
        onChange={onChangeOff}
      />
    </div>
  </div>
);

export default FieldControl;
