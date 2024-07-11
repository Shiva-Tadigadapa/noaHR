import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInputs from "./SelectInputs";
import SalaryInputs from "./SalaryInputs";
import SkillsInput from "./SkillsInput";

const Inputs = () => {
  const [displaySalary, setDisplaySalary] = useState(false);

  return (
    <div className="flex flex-col space-y-6">
      <TextInput id="jobTitle" label="Job Title" req="true" />
      <div className="flex items-center gap-5">
        <SelectInputs
          id="jobType"
          label="Job Type"
          options={[
            { value: "full-time", label: "Full-time" },
            { value: "part-time", label: "Part-time" },
            { value: "contract", label: "Contract" },
            { value: "internship", label: "Internship" },
            { value: "volunteer", label: "Volunteer" },
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
      </div>
      {/* <TextInput id="companyName" label="Company Name" req="true" /> */}
      <p className="text-md font-semibold">Location(s)</p>
      {/* <TextInput id="location" label="Location" /> */}
      <div className="flex flex-col gap-1">
        <SelectInputs
          id="remoteOptions"
          label="Remote Options"
          req="true"
          options={[
            { value: "in-office", label: "In Office" },
            { value: "hybrid", label: "Hybrid" },
            { value: "remote-friendly", label: "Remote Friendly" },
            { value: "only-remote", label: "Only Remote" },
          ]}
        />
        <span className="px-1 text-sm text-gray-500">
          In-office jobs require employees to operate from an office.
        </span>
      </div>

      <div className="flex items-center gap-5">
        <TextInput id="hiringCity" label="Hiring City" />
        <TextInput id="hiringCountry" label="Hiring Country" />
      </div>

      <div className="flex items-center py-4 gap-2">
        <input
          type="checkbox"
          checked={displaySalary}
          onChange={() => setDisplaySalary(!displaySalary)}
          className="h-6 w-6 rounded-full"
        />
        <label className="text-md font-semibold">Display Salary</label>
      </div>
      <SalaryInputs displaySalary={displaySalary} />
      <SelectInputs
        id="workExperience"
        label="Work Experience (in Years)"
        req={true}
        options={[
          { value: "0years", label: "0+ years of experience" },
          { value: "1years", label: "1+ years of experience" },
          { value: "2years", label: "2+ years of experience" },
          { value: "3years", label: "3+ years of experience" },
          { value: "4years", label: "4+ years of experience" },
          { value: "5years", label: "5+ years of experience" },
          { value: "6years", label: "6+ years of experience" },
          { value: "7years", label: "7+ years of experience" },
          { value: "8years", label: "8+ years of experience" },
          { value: "9years", label: "9+ years of experience" },
          { value: "10years", label: "10+ years of experience" },
        ]}
      />
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
