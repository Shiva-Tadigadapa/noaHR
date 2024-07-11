import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

const SelectDropdown = ({ options, label, value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

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
    <div className="relative w-full" ref={inputRef}>
      <div className="relative">
        <input
          type="text"
          className="w-full hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-600 py-2 px-4 pr-10 border border-gray-300 rounded-md"
          placeholder={`Search or select ${label.toLowerCase()}...`}
          value={
            options.find((option) => option.value === value)?.label ||
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
                onChange(option.value);
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
  );
};

export default SelectDropdown;
