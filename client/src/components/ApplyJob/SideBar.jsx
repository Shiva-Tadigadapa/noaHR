import React from "react";
import { IoGitBranchOutline } from "react-icons/io5";

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="  top-0  sticky    border-black/70 px-10 py-10 rounded-2xl gap-5 flex flex-col">
    <img className=" rounded-full h-32 w-32 object-cover  object-center" src="https://media.licdn.com/dms/image/D4D0BAQFEypkUpuesDw/company-logo_100_100/0/1712255887587/devatoms_logo?e=1728518400&v=beta&t=RT-vJ3dkFsSm9aIZYE5IZpcFu7IUUMFe7QRhOjSWZ7Y"/>
      <h1 className=" text-2xl w-full font-bold">Full Stack delop SDE</h1>
      <h2 className=" px-3 py-2  text-sm text-zinc-700 font-semibold rounded-xl   w-36 bg-gray-300">
        Job ID: 1903874
      </h2>
      <div className="flex  items-center  gap-2 text-md  text-gray-600">
        <CiLocationOn className=" inline-block" />
        <h2>Hyderabad, Telengana</h2>
      </div>
      <div className="flex  items-center  gap-2 text-md  text-gray-600">
        <MdOutlineWorkOutline className=" inline-block" />
        <h2>0 - 3 years</h2>
      </div>
      <button  className=" bg-black text-white  px-2 py-3 rounded-2xl">Apply</button>
    </div>
  );
};

export default SideBar;
