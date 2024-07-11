import React from "react";
import Board from "./Board";

const Kanban = () => {
  return (
    <div className="w-full h-full bg-slate-300/10 text-neutral-50 overflow-x-auto">
      <Board />
    </div>
  );
};

export default Kanban;
