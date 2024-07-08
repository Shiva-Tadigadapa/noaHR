import React from "react";
import JobList from "./JobList";

const Index = () => {
  return (
    <div className="bg-white w-full h-full p-16 gap-10">
      <div className=" w-[70%] m-auto">
        <div className="">
          <div className="flex items-start justify-center">
            <div>
              <h1 className="text-2xl font-extrabold">Careers at Devatoms</h1>
              <p className="w-[88%] py-2">
                If every person and business can tailor software to their
                problems, the world will be better at solving its problems. Our
                mission is to make that a ubiquitous reality.
              </p>
              <div className="pt-5 pb-10 flex items-center gap-10 ">
                <button
                  className="hover:bg-gray-800 hover:text-white text-black border
                 px-4 py-[0.39rem] rounded-lg
                transition-all  font-bold duration-300 delay-150
                 hover:bg-bg-gray-950 hover:px-5"
                >
                  Explore Openings
                </button>
                <p className="text-lg underline cursor-pointer">About us</p>
              </div>
            </div>
            <div className="-mt-10">
              <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=1080,quality=100/front-static/pages/careers/careers-hero-illustration-v2.png" alt="undrawvector" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <JobList/>
      </div>
    </div>
  );
};

export default Index;
