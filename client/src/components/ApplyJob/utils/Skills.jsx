import React from 'react';

const Skills = ({ skillsList }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {skillsList.map((skill, index) => (
        <div key={index} className='px-2 py-1 font-medium text-xs bg-gray-200/80 rounded'>
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
