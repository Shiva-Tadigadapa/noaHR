import React, { lazy, Suspense, useState } from 'react';
import { TbListDetails, TbFileDescription } from "react-icons/tb";
import { PiStepsBold } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { LuTextCursorInput } from "react-icons/lu";
const JobDetails = lazy(() => import('./Tabs/JobDetails/Form'));
const JobDescription = lazy(() => import('./Tabs/JD/Description'));
const HiringSteps = lazy(() => import('./Tabs/HiringSteps/Steps'));
const Finish = lazy(() => import('./Tabs/Finish/Finish'));
const ApplyForm = lazy(() => import('./Tabs/ApplyForm/Form'));

const components = {
    JobDetails: JobDetails,
    JobDescription: JobDescription,
    HiringSteps: HiringSteps,
    ApplyForm: ApplyForm,
    Finish: Finish
};

const icons = {
    JobDetails: <TbListDetails />,
    JobDescription: <TbFileDescription />,
    HiringSteps: <PiStepsBold />,
    ApplyForm: <LuTextCursorInput />,
    Finish: <FaCircleCheck />
};

const Index = () => {
    const [activeTab, setActiveTab] = useState('JobDetails');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const renderComponent = () => {
        const Component = components[activeTab];
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component />
            </Suspense>
        );
    };

    const getArrowClass = (index) => {
        const tabNames = Object.keys(components);
        const activeIndex = tabNames.indexOf(activeTab);

        return index <= activeIndex
            ? 'text-indigo-800'
            : 'text-zinc-400';
    };

    const getButtonClass = (tabName) => {
        return activeTab === tabName
            ? 'bg-indigo-200 text-black border-indigo-700'
            : 'bg-white text-black border-zinc-400';
    };

    return (
        <div className="flex flex-col items-start w-full p-8">
            <div className="w-full flex items-center p-4 justify-between mb-8">
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
            <div className="w-full flex bg-white p-20 relative items-center rounded-3xl justify-center">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Index;
