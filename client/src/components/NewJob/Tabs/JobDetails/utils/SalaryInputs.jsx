import React from "react";
import TextInput from "./TextInput";
import SelectInputs from "./SelectInputs";

const SalaryInputs = ({ displaySalary }) => {
  if (!displaySalary) return null;

  return (
    <>
      <TextInput id="salaryMin" label="Salary Range (Min)" />
      <TextInput id="salaryMax" label="Salary Range (Max)" />
      <SelectInputs
        id="currency"
        label="Currency"
        options={[
          { value: "USD", label: "USD" },
          { value: "EUR", label: "EUR" },
          { value: "GBP", label: "GBP" },
          { value: "INR", label: "INR" },
        ]}
      />
    </>
  );
};

export default SalaryInputs;