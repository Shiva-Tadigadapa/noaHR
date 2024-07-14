import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { DEFAULT_CARDS } from "./constants";
import { useModal } from "../../../context/ModalContext";

const Board = ({ openSideModal }) => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  const { isModalOpen, setIsModalOpen } = useModal();
  const { column } = useParams();

  const columnsData = [
    { title: "Sourced", column: "sourced", headingColor: "text-neutral-500" },
    { title: "Applied", column: "applied", headingColor: "text-black" },
    { title: "Contacted", column: "contacted", headingColor: "text-black" },
    { title: "HR Call", column: "hrcall", headingColor: "text-black" },
    { title: "Interview", column: "interview", headingColor: "text-black" },
  ];

  const filteredColumns = column
    ? columnsData.filter((col) => col.column === column)
    : columnsData;

  return (
    <div className="relative h-full w-full">
      <div className={`flex h-full w-full gap-3 ${isModalOpen ? 'pr-64' : ''} overflow-scroll p-12`}>
        {filteredColumns.map((col) => (
          <Column
            key={col.column}
            title={col.title}
            column={col.column}
            headingColor={col.headingColor}
            cards={cards}
            setCards={setCards}
          />
        ))}
        <BurnBarrel setCards={setCards} />
      </div>
    </div>
  );
};

export default Board;
