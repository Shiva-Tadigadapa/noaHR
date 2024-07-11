import React, { useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { DEFAULT_CARDS } from "./constants";

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full  gap-3 overflow-scroll p-12">
      <Column
        title="Sourced"
        column="sourced"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Applied"
        column="applied"
        headingColor="text-black"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Contacted"
        column="contacted"
        headingColor="text-black"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="HR Call"
        column="hrcall"
        headingColor="text-black"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Interview"
        column="interview"
        headingColor="text-black"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

export default Board;
