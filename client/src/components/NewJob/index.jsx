// Index.js
import React, { lazy, Suspense, useState } from "react";
import { TbListDetails, TbFileDescription } from "react-icons/tb";
import { PiStepsBold } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { LuTextCursorInput } from "react-icons/lu";
import Confetti from 'react-confetti';

const JobDetails = lazy(() => import("./Tabs/JobDetails/Form"));
const JobDescription = lazy(() => import("./Tabs/JD/Description"));
const HiringSteps = lazy(() => import("./Tabs/HiringSteps/Steps"));
const Finish = lazy(() => import("./Tabs/Finish/Finish"));
const ApplyForm = lazy(() => import("./Tabs/ApplyForm/Form"));

const components = {
  JobDetails: JobDetails,
  JobDescription: JobDescription,
  HiringSteps: HiringSteps,
  ApplyForm: ApplyForm,
  Finish: Finish,
};

const icons = {
  JobDetails: <TbListDetails />,
  JobDescription: <TbFileDescription />,
  HiringSteps: <PiStepsBold />,
  ApplyForm: <LuTextCursorInput />,
  Finish: <FaCircleCheck />,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("JobDetails");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); 
  };

  const renderComponent = () => {
    const Component = components[activeTab];
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component onConfetti={handleConfetti} handleTabClick={handleTabClick} />
      </Suspense>
    );
  };

  const getArrowClass = (index) => {
    const tabNames = Object.keys(components);
    const activeIndex = tabNames.indexOf(activeTab);

    return index <= activeIndex ? "text-zinc-800" : "text-zinc-300";
  };

  const getButtonClass = (tabName) => {
    return activeTab === tabName
      ? "bg-zinc-800 text-white border-zinc-800"
      : "bg-white text-black border-zinc-400";
  };

  return (
    <div className="relative flex flex-col items-start w-full p-8">


      <div className="w-full font-semibold text-3xl top-0 bg-[#efefef] z-50 flex items-center p-1 justify-between">
        Create new Job posting
      </div>
      <div className="w-full sticky top-0 backdrop-blur-lg bg-[#efefef]/30 border-b-2 border-[#efefef] z-50 flex items-center p-4 justify-between">
        {Object.keys(components).map((tabName, index) => (
          <React.Fragment key={tabName}>
            <button
              onClick={() => handleTabClick(tabName)}
              className={`flex items-center justify-center w-1/6 px-6 py-2 rounded-full border ${getButtonClass(tabName)}`}
            >
              <span className="mr-2">{icons[tabName]}</span>
              {tabName}
            </button>
            {index < Object.keys(components).length - 1 && (
              <svg
                className={`w-6 h-6 mx-2 ${getArrowClass(index)}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="w-full flex bg-white p-12 relative items-center rounded-3xl justify-center">
        {renderComponent()}
      </div>
      {showConfetti && (
        <div className="w-full justify-center flex">
        <Confetti width={1000} gravity={0.8} />
      </div>
      )}
    </div>
  );
};

export default Index;
