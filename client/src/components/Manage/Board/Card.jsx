import React from "react";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
import Avatar from "boring-avatars";
import { useModal } from "../../../context/ModalContext";

const Card = ({ title, id, column, handleDragStart, organization }) => {
  const { isModalOpen, setIsModalOpen } = useModal();
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) =>
          handleDragStart(e, { title, id, column, organization })
        }
        className={`cursor-grab rounded border border-neutral-700/10 text-black
          p-3 active:cursor-grabbing  bg-white`}
      >
        <div className="flex gap-2 items-center">
          <Avatar
            size={28}
            name={title}
            variant="beam"
            colors={[
              "#92A1C6",
              "#146A7C",
              "#F0AB3D",
              "#C271B4",
              "#C20D90",
              "#FF4E50",
            ]}
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-neutral-400">{organization}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
