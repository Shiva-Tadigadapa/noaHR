import React from "react";
import Sidebar from "../../components/dashBoard/SideBar";
import SearchHOC from "../../components/dashBoard/SearchHoc";
import Avatar from "boring-avatars";
import JobCard from "../../components/dashBoard/JobCard";
import Header from "../../components/dashBoard/Header";
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
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
