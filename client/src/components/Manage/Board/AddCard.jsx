import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

const AddCard = ({ column, setCards }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");

  const handleAddCard = () => {
    if (title.trim()) {
      setCards((prev) => [
        ...prev,
        { id: nanoid(), title, column },
      ]);
      setTitle("");
      setIsAdding(false);
    }
  };

  return (
    <div className="mt-2">
      {isAdding ? (
        <motion.div
          layout
          className="rounded border border-neutral-700 bg-neutral-800 p-3"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsAdding(false)}
            onKeyDown={(e) => e.key === "Enter" && handleAddCard()}
            className="w-full bg-neutral-800 text-sm text-neutral-100 outline-none"
            autoFocus
          />
          <button
            onClick={handleAddCard}
            className="mt-2 w-full rounded bg-violet-500 p-2 text-sm text-white"
          >
            Add Card
          </button>
        </motion.div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex w-full items-center justify-center rounded border border-neutral-700 bg-neutral-800 p-2 text-sm text-neutral-100"
        >
          <FiPlus className="mr-2" /> Add Card
        </button>
      )}
    </div>
  );
};

export default AddCard;
