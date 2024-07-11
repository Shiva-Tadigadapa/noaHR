import React from "react";
import Navbar from "./NavBar/Navbar";
import SideBar from "./Sidebar/Sidebar";
import BoardIndex from "./Board/BoardIndex";

const Index = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center w-full">
      <Navbar />
      <div className="flex  w-full items-start">
        <SideBar />
        <BoardIndex />
      </div>
    </div>
  );
};

export default Index;
