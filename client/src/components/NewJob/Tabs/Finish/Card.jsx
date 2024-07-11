import React from 'react';

const Card = ({ title, description, icon: Icon }) => (
  <div className="w-1/3 p-6 border rounded-md shadow-md bg-white">
    {Icon && <Icon className="text-3xl text-zinc-800 my-4" />}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Card;
