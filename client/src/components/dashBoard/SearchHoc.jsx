import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";

const SearchHOC = () => {
  return (
    <>
      <div className="flex px-8 py-4 w-full items-center justify-between relative">
        <CiSearch className="inline-block ml-3 absolute text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none focus:ring-1 focus:ring-gray-300 pl-12 text-black/70 bg-gray-300 rounded-md p-2 w-[60%] h-10"
        />
        <div className="flex justify-between gap-5  items-center">
          <IoNotificationsOutline className="hover:bg-black hover:text-white cursor-pointer rounded-lg p-2 hover:scale-105 transition-all text-4xl text-gray-400  right-0" />
          <MdHelpOutline className="hover:bg-black hover:text-white cursor-pointer rounded-lg p-2 hover:scale-105 transition-all text-4xl text-gray-400  right-0" />
          <div className="bg-gray-400 h-5 w-[0.9px]"></div>
          <h1 className="text-black/70 font-semibold text-lg">
            Welcome Shiva 👋!
          </h1>
        </div>
      </div>
      <hr className="border-gray-100  bg-white " />
    </>
  );
};

export default SearchHOC;
