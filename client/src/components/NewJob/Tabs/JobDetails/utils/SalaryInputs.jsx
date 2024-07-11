import React from "react";
import TextInput from "./TextInput";
import SelectInputs from "./SelectInputs";

const SalaryInputs = ({ displaySalary }) => {
  if (!displaySalary) return null;

  return (
    <>
      <div className="w-full flex gap-5 items-center">
        <SelectInputs
          id="paymentFrequency"
          label="Payment Frequency"
          options={[
            { value: "hourly", label: "Hourly" },
            { value: "monthly", label: "Monthly" },
            { value: "annually", label: "Annualy" },
          ]}
        />
        <TextInput id="salaryMin" label="Salary Range (Min)" />
        <span className="text-gray-500 ">to</span>
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
      </div>
    </>
  );
};

export default SalaryInputs;