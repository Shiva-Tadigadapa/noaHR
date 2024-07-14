import React, { useState } from "react";
import Avatar from "boring-avatars";
import { MdClose, MdOutlineDone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuMail, LuPlus } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import ApplicationDetails from "./Pages/ApplicationDetails";
import CVResume from "./Pages/CVResume";
import Tests from "./Pages/Tests";
import Mail from "./Pages/Mail";
import Feedback from "./Pages/Feedback";

const StudentModal = () => {
  const [activeTab, setActiveTab] = useState("CVResume");

  const renderContent = () => {
    switch (activeTab) {
      case "ApplicationDetails":
        return <ApplicationDetails />;
      case "CVResume":
        return <CVResume />;
      case "Tests":
        return <Tests />;
      case "Mail":
        return <Mail />;
      case "Feedback":
        return <Feedback />;
      default:
        return <ApplicationDetails />;
    }
  };

  return (
    <>
      <div className="text-black h-full overflow-scroll">
        <div className="flex items-center px-4 mt-5 w-full justify-between">
          <h1 className="text-2xl font-bold">Student Details</h1>
          <div className="flex items-center gap-5">
            <button>View Full</button>
            <button>
              <MdClose className="text-2xl" />
            </button>
          </div>
        </div>
        <div>
          <div className="p-5">
            <div className="flex flex-col justify-between rounded-xl gap-5 px-6 py-8 border">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Avatar
                    size={50}
                    name="Maria Mitchell"
                    variant="beam"
                    colors={[
                      "#92A1C6",
                      "#146A7C",
                      "#F0AB3D",
                      "#C271B4",
                      "#C20D90",
                    ]}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Bala Shiva Tadigadap</h1>
                    <div className="flex text-gray-500 text-sm gap-3 font-medium">
                      <div className="flex items-center gap-1">
                        <CiMail />
                        <p>shivatadigadapa@gmail.com</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoCallOutline />
                        <p>(+91)83284873609</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-3 flex text-gray-500">
                  <div className="border h-fit p-1 rounded-full">
                    <LuPlus className="text-2xl" />
                  </div>
                  <div className="border h-fit p-1 rounded-full">
                    <LuMail className="text-2xl" />
                  </div>
                  <div className="border h-fit p-1 rounded-full">
                    <BsThreeDots className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="justify-between flex">
                <div className="text-sm">
                  <p className="text-gray-400">Lead Owner</p>
                  <h1 className="text-lg">Ester Horward</h1>
                </div>
                <div className="border" />
                <div className="text-sm">
                  <p className="text-gray-400">Lead Owner</p>
                  <h1 className="text-lg">Ester Horward</h1>
                </div>
                <div className="border" />
                <div className="text-sm">
                  <p className="text-gray-400">Lead Owner</p>
                  <h1 className="text-lg">Ester Horward</h1>
                </div>
                <div className="border" />
                <div className="text-sm">
                  <p className="text-gray-400">Lead Owner</p>
                  <h1 className="text-lg">Ester Horward</h1>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5">
              <div className="gap-2 bg-green-100 w-36 h-10 rounded-md text-green-900 flex items-center justify-center">
                <MdOutlineDone />
                Screened
              </div>
              <div className="gap-2 bg-green-100 w-36 h-10 rounded-md text-green-900 flex items-center justify-center">
                <MdOutlineDone />
                ATS Done
              </div>
              <div className="gap-2 bg-green-500 w-36 h-10 rounded-md text-white flex items-center justify-center">
                In Process
              </div>
              <div className="gap-2 bg-gray-100 w-36 h-10 rounded-md text-black flex items-center justify-center">
                Offer Letter
              </div>
              <div className="gap-2 bg-gray-100 w-36 h-10 rounded-md text-black flex items-center justify-center">
                Screened
              </div>
            </div>

            <div className="border-b mt-8">
              <div className="flex px-3 justify-between">
              <button
                  className={`flex-col flex gap-2 ${activeTab === "CVResume" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("CVResume")}
                >
                  CV / Resume
                  {activeTab === "CVResume" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
                <button
                  className={`flex-col flex gap-2 ${activeTab === "ApplicationDetails" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("ApplicationDetails")}
                >
                  Application Details
                  {activeTab === "ApplicationDetails" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
             
                <button
                  className={`flex-col flex gap-2 ${activeTab === "Tests" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("Tests")}
                >
                  Test Results
                  {activeTab === "Tests" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
                <button
                  className={`flex-col flex gap-2 ${activeTab === "Mail" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("Mail")}
                >
                  Send Mail
                  {activeTab === "Mail" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
                <button
                  className={`flex-col flex gap-2 ${activeTab === "Feedback" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("Feedback")}
                >
                  Feedback
                  {activeTab === "Feedback" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-5">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentModal;
