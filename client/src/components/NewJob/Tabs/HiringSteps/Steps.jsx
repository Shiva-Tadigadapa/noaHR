import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import Modal from "./utils/Modal";
import { FaTrash, FaPen } from "react-icons/fa";
import { RxDragHandleDots2 } from "react-icons/rx";

const ItemType = "STEP";

const initialSteps = [
  { id: 1, content: "Initial Screening" },
  { id: 2, content: "Technical Interview" },
  { id: 3, content: "HR Interview" },
  { id: 4, content: "Offer" },
  { id: 5, content: "Offer" },
  { id: 6, content: "Offer" },
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
      className="border-b-0 border-gray-500 border first:rounded-t-lg last:rounded-b-lg px-4 py-2 overflow-hidden"
    >
      <div className="flex items-center justify-between gap-14">
        <div className="flex items-center justify-between gap-3 cursor-grab active:cursor-grabbing">
          <RxDragHandleDots2 className="text-gray-400" />
          <div>{step.content}</div>
        </div>
        <div>
          <button
            className="text-gray-400 px-2 py-1 rounded"
            onClick={() => handleEditStep(step)}
          >
            <FaPen />
          </button>
          <button
            className="text-gray-400 px-2 py-1 rounded"
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
    setNewStepText(""); // Clear new step text on modal close
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
    if (!newStepText.trim()) return; // Prevent saving empty text

    if (editingStep !== null) {
      // Editing an existing step
      const updatedSteps = steps.map((step) =>
        step.id === editingStep ? { ...step, content: newStepText } : step
      );
      setSteps(updatedSteps);
    } else {
      // Adding a new step
      const newStep = {
        id: steps.length + 1, // Generate a unique ID for the new step
        content: newStepText,
      };
      setSteps([...steps, newStep]);
    }

    setEditingStep(null);
    setNewStepText("");
    closeModal2(); // Close the modal after saving
  };

  const handleDeleteStep = (stepId) => {
    const updatedSteps = steps.filter((step) => step.id !== stepId);
    setSteps(updatedSteps);
  };

  return (
    <div className="flex flex-row-reverse">
      <button
        className="absolute right-8 top-6 border px-3 py-2 rounded-2xl bg-gray-200"
        onClick={openModal2}
      >
        <h1 className="text-xl">New Job Post</h1>
      </button>
      {modal2 && (
        <Modal onClose={closeModal2}>
          <div className="p-4">
            <h2 className="text-xl mb-4">Add a New Step</h2>
            <input
              type="text"
              value={newStepText}
              onChange={(e) => setNewStepText(e.target.value)}
              className="border rounded px-2 py-1 mb-2 text-gray-300   bg-transparent active:outline-none outline-none w-full border-gray-200"
              placeholder="Enter new step/stage"
            />
            <div className="flex justify-end">
              <button
                className="bg-zinc-800 hover:bg-black text-white px-4 py-2 mr-2 rounded"
                onClick={handleSaveEdit}
              >
                Save the Stage
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                onClick={closeModal2}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      <DndProvider backend={HTML5Backend}>
        <div className="rounded-lg bg-gray-800 text-white overflow-hidden">
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
          <div className="p-4">
            <h2 className="text-xl mb-4">Edit Step</h2>
            <input
              type="text"
              value={newStepText}
              onChange={(e) => setNewStepText(e.target.value)}
              className="border rounded px-2 py-1 mb-2 text-gray-300  bg-transparent  active:outline-none outline-none w-full border-gray-400"
              placeholder="Edit step/stage"
            />
            <div className="flex justify-end">
              <button
                className="bg-zinc-800 hover:bg-black text-white px-4 py-2 mr-2 rounded"
                onClick={handleSaveEdit}
              >
                Save the Stage
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                onClick={() => setEditingStep(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Steps;
