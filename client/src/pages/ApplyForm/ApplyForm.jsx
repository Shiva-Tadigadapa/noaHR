import React from "react";
import SideBar from "../../components/ApplyJob/SideBar";
import Depiction from "../../components/ApplyJob/Depiction";
const ApplyForm = () => {
  return (
    <>
      <div className=" flex justify-between gap-5 w-full">
        <div className=" sticky top-0 w-[60%] ">
          <SideBar />
        </div>
        <Depiction />
      </div>
    </>
  );
};

export default ApplyForm;
