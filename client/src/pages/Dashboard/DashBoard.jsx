import React from "react";
import SearchHOC from "../../components/dashBoard/SearchHoc";
import Header from "../../components/dashBoard/Header";
import JobCard from "../../components/dashBoard/JobCard";

const Dashboard = () => {
  return (
    <>
      <div className=" w-full gap-5 px-4 py-4 flex justify-center items-center">
        <div className=" px-4 py-5 rounded-3xl bg-gray-100 border w-full ">
          <SearchHOC />
          <div>
            <Header />
          </div>
          <div className=" flex flex-col gap-4">
            <JobCard name="one" />
            <JobCard name="two" />
            <JobCard name="three" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
