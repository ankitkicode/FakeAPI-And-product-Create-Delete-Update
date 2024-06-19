// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

function Card({id, image, title, price }) {
  return (
    <Link to={`/details/${id}`} className="bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="h-40 w-full object-cover mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <h2 className="text-lg font-semibold mb-2 text-white">{title}</h2>
      <p className="text-blue-500 mb-2">${price}</p>
    </Link>
  );
}

export default Card;
