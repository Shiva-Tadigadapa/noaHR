import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import Modal from "./utils/Modal";
import { FaTrash, FaPen } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";

const ItemType = "STEP";

const initialSteps = [
  { id: 1, content: "Applied" },
  { id: 2, content: "Initial Screening" },
  { id: 3, content: "Online Assessment" },
  { id: 4, content: "Technical Interview" },
  { id: 5, content: "HR Interview" },
  { id: 6, content: "Hired" },
];

const DraggableStep = ({
  step,
  index,
  moveStep,
  handleEditStep,
  handleDeleteStep,
}) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveStep(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="w-full bg-indigo-50 border-indigo-600/60 border-2 rounded-lg px-4 py-2 overflow-hidden"
    >
      <div className="flex items-center justify-between gap-14">
        <div className="flex text-zinc-900 items-center justify-between gap-3 cursor-grab active:cursor-grabbing">
          <RxDragHandleDots2 className="" />
          <div>{step.content}</div>
        </div>
        <div>
          <button
            className="text-gray-800 px-2 py-1 rounded"
            onClick={() => handleEditStep(step)}
          >
            <FaPen />
          </button>
          <button
            className="text-gray-800 px-2 py-1 rounded"
            onClick={() => handleDeleteStep(step.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

const Steps = () => {
  const [steps, setSteps] = useState(initialSteps);
  const [editingStep, setEditingStep] = useState(null);
  const [newStepText, setNewStepText] = useState("");
  const [modal2, setModal2] = useState(false);

  const openModal2 = () => {
    setModal2(true);
  };

  const closeModal2 = () => {
    setModal2(false);
    setNewStepText(""); 
  };

  const moveStep = (fromIndex, toIndex) => {
    const updatedSteps = update(steps, {
      $splice: [
        [fromIndex, 1],
        [toIndex, 0, steps[fromIndex]],
      ],
    });
    setSteps(updatedSteps);
  };

  const handleEditStep = (step) => {
    setEditingStep(step.id);
    setNewStepText(step.content);
  };

  const handleSaveEdit = () => {
    if (!newStepText.trim()) return; 

    if (editingStep !== null) {
      const updatedSteps = steps.map((step) =>
        step.id === editingStep ? { ...step, content: newStepText } : step
      );
      setSteps(updatedSteps);
    } else {
      const newStep = {
        id: steps.length + 1, 
        content: newStepText,
      };
      setSteps([...steps, newStep]);
    }

    setEditingStep(null);
    setNewStepText("");
    closeModal2(); 
  };

  const handleDeleteStep = (stepId) => {
    const updatedSteps = steps.filter((step) => step.id !== stepId);
    setSteps(updatedSteps);
  };

  return (
    <div className="w-full justify-center flex flex-row-reverse">
      <button
        className="absolute right-8 hover:bg-black hover:text-white transition-all top-6 border px-3 py-2 rounded-xl bg-zinc-100"
        onClick={openModal2}
      >
        <h1 className="text-lg">New Job Post</h1>
      </button>
      {modal2 && (
        <Modal onClose={closeModal2}>
          <div className="p-4">
            <h2 className="text-black text-xl mb-4">Add a New Step</h2>
            <input
              type="text"
              value={newStepText}
              onChange={(e) => setNewStepText(e.target.value)}
              className="border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-2 mb-2 text-gray-800 bg-transparent active:outline-none outline-none w-full focus:border-indigo-400 border-zinc-800"
              placeholder="Enter new step/stage"
            />
            <div className="flex py-4 justify-between">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 mr-2 rounded-lg"
                onClick={handleSaveEdit}
              >
                Save the Stage
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={closeModal2}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      <DndProvider backend={HTML5Backend}>
        <div className="w-[70%] rounded-lg flex flex-col gap-1 text-black overflow-hidden">
          {steps.map((step, index) => (
            <DraggableStep
              key={step.id}
              index={index}
              step={step}
              moveStep={moveStep}
              handleEditStep={handleEditStep}
              handleDeleteStep={handleDeleteStep}
            />
          ))}
        </div>
      </DndProvider>

      {editingStep !== null && (
        <Modal onClose={() => setEditingStep(null)}>
          <div className="p-4 gap-1 flex flex-col">
            <h2 className=" text-black text-2xl mb-4">Edit Step</h2>
            <input
              type="text"
              value={newStepText}
              onChange={(e) => setNewStepText(e.target.value)}
              className="border rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 py-2 mb-2 text-gray-800 bg-transparent active:outline-none outline-none w-full focus:border-indigo-400 border-zinc-800"
              placeholder="Edit step/stage"
            />
            <div className="flex py-5 justify-between">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setEditingStep(null)}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 mr-2 rounded-lg"
                onClick={handleSaveEdit}
              >
                Save the Stage
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Steps;
