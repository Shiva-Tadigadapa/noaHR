import React, { useState, useEffect, useRef } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import ToggleButton from "./ToggleButton";

const CustomQuestion = ({
  question,
  type,
  options,
  onChangeQuestion,
  onChangeType,
  onAddOption,
  onChangeOption,
  onRemoveOption,
  required,
  onChangeRequired,
  onRemove,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([
    { value: "text", label: "Input Text" },
    { value: "textarea", label: "Long Text Area" },
    { value: "multipleChoice", label: "Multiple Choice" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const filtered = [
      { value: "text", label: "Input Text" },
      { value: "textarea", label: "Long Text Area" },
      { value: "multipleChoice", label: "Multiple Choice" },
    ].filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-1/2 border p-3 py-5 rounded-lg flex flex-col gap-3">
      <input
        type="text"
        value={question}
        onChange={(e) => onChangeQuestion(e.target.value)}
        placeholder="Enter your question"
        className="py-2 px-4 border rounded-lg focus:bg-zinc-200/50 focus:outline-none w-full focus:ring-2 focus:ring-zinc-500"
      />
      <div className="w-full flex gap-2">
        <div className="relative w-full" ref={inputRef}>
          <div className="relative">
            <input
              type="text"
              className="w-full hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-600 py-2 px-4 pr-10 border border-gray-300 rounded-md"
              placeholder="Search or select..."
              value={
                filteredOptions.find((option) => option.value === type)?.label ||
                searchTerm
              }
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={toggleDropdown}
              onFocus={() => setIsOpen(true)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaAngleDown />
            </div>
          </div>
          {isOpen && (
            <ul
              className="absolute z-10 mt-1 bg-white rounded-lg w-full shadow-lg border border-gray-200 divide-y divide-gray-100 overflow-auto max-h-60"
            >
              {filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="flex items-center px-4 py-2 cursor-pointer w-full hover:bg-gray-100"
                  onClick={() => {
                    onChangeType(option.value);
                    setSearchTerm("");
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex space-x-4">
          <ToggleButton
            label="Required"
            selected={required}
            onChange={onChangeRequired}
          />
          <button
            onClick={onRemove}
            className="py-1.5 px-3 text-xl hover:bg-red-600 transition-all border rounded-lg bg-red-500 text-white"
          >
            <RiDeleteBinFill />
          </button>
        </div>
      </div>
      {type === "multipleChoice" && (
        <div className="flex flex-col gap-2">
          {options.map((option, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={option}
                onChange={(e) => onChangeOption(index, e.target.value)}
                placeholder="Option"
                className="py-2 px-4 border rounded-lg w-full"
              />
              <button
                onClick={() => onRemoveOption(index)}
                className="py-1.5 px-3 text-xl hover:bg-red-600 transition-all border rounded-lg bg-red-500 text-white"
              >
                <RiDeleteBinFill />
              </button>
            </div>
          ))}
          <button
            onClick={onAddOption}
            className="py-1.5 px-4 border rounded-lg bg-gray-800 text-white"
          >
            Add Option
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomQuestion;
