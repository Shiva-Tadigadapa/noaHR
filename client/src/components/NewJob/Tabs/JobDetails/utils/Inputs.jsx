import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInputs from "./SelectInputs";
import SalaryInputs from "./SalaryInputs";
import SkillsInput from "./SkillsInput";

const Inputs = () => {
  const [displaySalary, setDisplaySalary] = useState(false);

  return (
    <div className="flex flex-col space-y-6">
      <TextInput id="jobTitle" label="Job Title" />
      <TextInput id="companyName" label="Company Name" />
      <TextInput id="location" label="Location" />
      <SelectInputs
        id="jobType"
        label="Job Type"
        options={[
          { value: "full-time", label: "Full-time" },
          { value: "part-time", label: "Part-time" },
          { value: "contract", label: "Contract" },
          { value: "internship", label: "Internship" },
        ]}
      />
      <SelectInputs
        id="jobCategory"
        label="Job Category"
        options={[
          { value: "software-development", label: "Software Development" },
          { value: "design", label: "Design" },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
        ]}
      />
      <TextInput id="hiringCity" label="Hiring City" />
      <TextInput id="hiringCountry" label="Hiring Country" />
      <SelectInputs
        id="remoteOptions"
        label="Remote Options"
        options={[
          { value: "hybrid", label: "Hybrid" },
          { value: "only-remote", label: "Only Remote" },
          { value: "no-remote", label: "No Remote" },
        ]}
      />
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-semibold">Display Salary</label>
        <input
          type="checkbox"
          checked={displaySalary}
          onChange={() => setDisplaySalary(!displaySalary)}
          className="h-4 w-4"
        />
      </div>
      <SalaryInputs displaySalary={displaySalary} />
      <SkillsInput />
      <TextInput
        id="applicationDeadline"
        label="Application Deadline"
        type="date"
      />
    </div>
  );
};

export default Inputs;
