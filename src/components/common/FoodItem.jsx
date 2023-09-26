// src/components/common/FoodItem.js

import React from 'react';

const FoodItem = ({ food }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold">{food.name}</h2>
      <p className="text-gray-600">${food.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-full">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default FoodItem;
