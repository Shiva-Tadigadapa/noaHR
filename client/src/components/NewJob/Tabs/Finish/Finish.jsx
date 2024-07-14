import React from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { FaWandMagicSparkles } from "react-icons/fa6"; 
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { MdOutlineGroupAdd } from "react-icons/md";
import { ImShare2 } from "react-icons/im";
import Card from './Card';

const Finish = ({ onConfetti }) => {
  const navigate = useNavigate();
  
  const handleFinish = () => {
    toast.success('Job created successfully');
    onConfetti();
    setTimeout(() => {
      navigate('/myjobs/manage/boo');
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-8">
      <h3 className='text-start w-full text-black font-semibold text-xl'>Explore Additional Options</h3>
      <div className="flex flex-wrap gap-6">
        <Card
          title="Manage Social Boards"
          description="Post job openings on social boards such as LinkedIn and Indeed."
          icon={FaWandMagicSparkles}
        />
        <Card
          title="Email & Automation"
          description="Set up email and automation workflows to streamline your hiring process."
          icon={AiTwotoneThunderbolt}
        />
        <Card
          title="Invite Others"
          description="Invite team members and collaborators to this job."
          icon={MdOutlineGroupAdd} 
        />
        <Card
          title="Share Job"
          description="Share the job details and collaborate on the hiring process."
          icon={ImShare2}
        />
      </div>

      <button
        onClick={handleFinish}
        className="py-2 px-6 bg-zinc-800 text-white rounded-lg shadow-md hover:bg-zinc-900 hover:scale-105 transition duration-300"
      >
        Finish Creating Job
      </button>
    </div>
  );
};

export default Finish;
