import React from "react";
import Inputs from "./utils/Inputs";

const Form = () => {
  return (
    <>
      <div className="p-8">
        <div>
          <div>
            <h1 className="text-xl font-semibold py-1">Job Information</h1>
          </div>
          <div>
            <p>
              Here enter general information about the job you are posting. This
              information will be displayed on the job listing page. You can
              edit this information later. You can also add more details about
              the job in the next step.
            </p>
          </div>
        </div>
        {/* input forms */}
        <div className="py-5">
          <Inputs />
        </div>
        <div>
          <button className="bg-gray-900/90 px-10 py-2 tracking-wider hover:bg-gray-950 text-white rounded-lg float-right">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
