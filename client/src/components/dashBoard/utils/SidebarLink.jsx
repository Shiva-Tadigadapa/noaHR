import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = ({ href, icon, text, isActive }) => {

  
  const handleClick = () => {
    console.log("clicked")
  };

  return (
    <Link to={href} onClick={handleClick}>
      <li className={`font-light flex items-center px-4 rounded-lg py-1  hover:scale-105 cursor-pointer transition-all ${isActive ? 'bg-black text-white my-2 text-md hover:bg-black' : 'my-1 text-sm hover:bg-gray-200'}`}>
        {icon && React.createElement(icon, { className: `mr-2 text-xl ${isActive ? 'text-white' : 'text-gray-500'}` })}
        {text}
      </li>
    </Link>
  );
};

export default SidebarLink;
