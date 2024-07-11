import React from "react";
import Editor from "./Editor";

const Description = ({ handleTabClick }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="block">
        <h1 className="text-xl font-semibold pb-1">Job Description</h1>
        <p className="pb-2">
          Here enter the job description. This information will be displayed on
          the job listing page. You can edit this information later. You can
          also add more details about the job in the next step.
        </p>
      </div>
      <div className="w-full block py-4">
        <Editor />
      </div>
      <div className="w-full mt-10">
        <button
          onClick={() => handleTabClick("HiringSteps")}
          className="bg-gray-900/90 px-10 py-2 tracking-wider hover:bg-gray-950 text-white rounded-lg float-right">
          Next
        </button>
      </div>
    </div>
  );
};

export default Description;
