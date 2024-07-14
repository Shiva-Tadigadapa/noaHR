import React from "react";
import Navbar from "./NavBar/Navbar";
import SideBar from "./Sidebar/Sidebar";
import BoardIndex from "./Board/BoardIndex";

const Index = ({openSideModal}) => {
  return (
    <div className="flex overflow-hidden flex-col items-center w-full">
      <Navbar />
      <div className="flex  w-full items-start">
        <SideBar />
        <BoardIndex openSideModal={openSideModal} />
      </div>
      
    </div>
  );
};

export default Index;
