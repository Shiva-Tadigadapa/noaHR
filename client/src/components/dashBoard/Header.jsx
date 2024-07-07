import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex  justify-between px-10 py-4  mb-4">
        <div>
          <h2>Your Jobs</h2>
        </div>
        <div>
          <button
            onClick={() => navigate("/newjob")}
            className=" px-5 py-2  bg-gray-900/80 text-white rounded-lg"
          >
            Post a Job
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
