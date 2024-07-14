import React from "react";
import Menu from "./Menu";
import Kanban from "./Kanban";
import { useParams } from "react-router-dom";
const BoardIndex = ({openSideModal}) => {
  const { id } = useParams();
  return (
    <>
      <div className="w-full h-screen bg-white border rounded flex flex-col">
        <h1 className="mt-8 text-2xl font-semibold mx-14">327 Applications</h1>
        <div className="mx-14">
          <Menu />
        </div>
        <div className="flex-1 mt-4 overflow-auto">
          <Kanban openSideModal={openSideModal}  pageId={id}/>
        </div>        
      </div>
    </>
  );
};

export default BoardIndex;
