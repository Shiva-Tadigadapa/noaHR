import React, { useState } from "react";
import SideBar from "../../components/ApplyJob/SideBar";
import Depiction from "../../components/ApplyJob/Depiction";
import Form from "../../components/ApplyJob/Form";

const ApplyForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="flex p-5 bg-white justify-between gap-5 w-full">
      <div className="border-r h-screen sticky top-0 w-3/12">
        <SideBar handleToggle={handleToggle} showForm={showForm} />
      </div>
      <div className="w-9/12">{showForm ? <Form /> : <Depiction />}</div>
    </div>
  );
};

export default ApplyForm;
