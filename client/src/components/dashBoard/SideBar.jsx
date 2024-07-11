import React from "react";
// import userjson from "../utils/user.json";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { TbBrandGithubCopilot } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { IoFolderOpen } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { FaMoneyBillWave } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";
import { MdOutlineContentPasteGo } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import SidebarLink from "./utils/SidebarLink";
import { LuSettings } from "react-icons/lu";

const sidebar = () => {
  const SidebarLinks = "home";
  const location = useLocation();
  const isPageActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div
      className=" bg-gray-100 rounded-3xl sticky top-10 h-[92vh] flex flex-col items-center pb-10 gap-10 border-r border-gray-200"
    >
      <div className="flex w-[90%] items-center
       justify-between p-5  border-b-2 border-dashed ">
        <div className="flex items-center gap-2">
          <TbBrandGithubCopilot className="text-4xl p-2 bg-red-400 border border-red-600 rounded-full " />
          <h1 className="text-2xl font-bold text-center">
            noaHr
          </h1>
        </div>
        <LuSettings className="text-3xl border p-1 cursor-pointer hover:bg-black hover:text-white transition-all hover:scale-105 rounded-lg bg-gray-100" />
      </div>
      <div className="w-full  p-4   ">
        <p className="text-xs font-bold text-gray-500 tracking-wider pl-3">
          DASHBOARD
        </p>
        <ul className="flex flex-col gap-5">
          <SidebarLink />
          <SidebarLink
            href="projects"
            icon={IoFolderOpen}
            text="Projects"
            isActive={SidebarLinks === "projects"}
          />
          <SidebarLink
            href="customers"
            icon={MdPeopleAlt}
            text="Customers"
            isActive={SidebarLinks === "customers"}
          />
          <SidebarLink
            href="activities"
            icon={SlGraph}
            text="Activities"
            isActive={SidebarLinks === "activities"}
          />
          <SidebarLink
            href="accounts"
            icon={FaMoneyBillWave}
            text="Accounts"
            isActive={SidebarLinks === "accounts"}
          />
        </ul>
      </div>
      <hr className="w-[80%] p-2" />

      <div className=" bg-black  text-white px-2 py-2 w-[80%] rounded-3xl text-center">
        Profile
      </div>
    </div>
  );
};

export default sidebar;
