import React from 'react';

const Modal = ({ onClose, children }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex  bg-zinc-400/20 backdrop-blur-sm items-center justify-center z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className=" bg-zinc-50 text-white rounded-3xl p-8 max-w-md w-full z-50" onClick={stopPropagation}>
        <button
          className="absolute top-0 right-0 m-4 text-4xl text-zinc-900 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
