import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";


const CustomSelect = ({ id, label, options, req }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const filtered = options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchTerm, options]);

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    setIsOpen(true);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleOutsideClick = event => {
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
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {req && <span className="text-red-500"> *</span>}

      </label>
      <div className="relative" ref={inputRef}>
        <div className="relative">
          <input
            type="text"
            id={id}
            className="w-full focus:outline-none focus:ring-1 focus:ring-indigo-600 py-2 px-4 pr-10 border border-gray-300 rounded-md"
            placeholder="Search or select..."
            value={selectedOption ? selectedOption : searchTerm}
            onChange={handleInputChange}
            onClick={toggleDropdown}
            onFocus={() => setIsOpen(true)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FaAngleDown />
          </div>
        </div>
        {isOpen && (
          <ul
            id={`${id}-select`}
            className="absolute z-10 mt-1 bg-white rounded-lg w-full shadow-lg border border-gray-200 divide-y divide-gray-100  overflow-auto max-h-60"
          >
            {filteredOptions.map(option => (
              <li
                key={option.value}
                className="flex items-center px-4 py-2 cursor-pointer w-full hover:bg-gray-100"
                onClick={() => {
                  setSelectedOption(option.label);
                  setSearchTerm("");
                  setIsOpen(false);
                }}
              >
                <label
                  htmlFor={`checkbox-${option.value}`}
                  className="text-sm font-medium text-gray-900"
                >
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
