import React from "react";

const Header = () => {
  return (
    <>
      <div className=" flex  justify-between px-10 py-4  mb-4">
        <div>
          <h2>Your Jobs</h2>
        </div>
        <div>
          <button className=" px-5 py-2  bg-gray-900/80 text-white rounded-lg">
            Post a Job
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
