import React from "react";
import Index from "../../components/Manage/Index";

const ManageJob = ({openSideModal}) => {
  return (
    <div className="w-full">
      <Index openSideModal={openSideModal}/>
    </div>
  );
};

export default ManageJob;
