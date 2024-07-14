import React from "react";
import Board from "./Board";
import { useModal } from "../../../context/ModalContext";
import { useNavigate } from "react-router-dom";
import StudentModal from "./KanbanModal/StudentModal";

const Kanban = ({ openSideModal }) => {
    const { isModalOpen } = useModal();
    const navigate = useNavigate();

    const handleEscape = (e) => {
        if (e.key === "Escape" && isModalOpen) {
            navigate(-1); // Navigate back to previous page
        }
    };

    // Add event listener for Escape key
    React.useEffect(() => {
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isModalOpen]); // Only add/remove listener when isModalOpen changes

    return (
        <div className="w-full h-full bg-slate-300/10 text-neutral-50 overflow-x-auto">
            <Board openSideModal={openSideModal} />
            { isModalOpen && (
                <div className={`bg-black/10 right-0 top-0 w-full h-full absolute`}>
                    <div className="w-2/3 absolute right-0 top-0 p-4 h-full">
                        <div className="h-full bg-white shadow-lg p-4 rounded-3xl">
                            <StudentModal />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Kanban;
