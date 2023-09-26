// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/products';

const Dashboard = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    async function fetchFoodItems() {
      try {
        const response = await getAllProducts();
        setFoodItems(response);
      } catch (error) {
        console.error('Error al cargar alimentos:', error);
      }
    }

    fetchFoodItems();
  }, []);

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Horarios de Comida</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foodItems.map((food) => (
            <div key={food.id} className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold">{food.name}</h2>
              <p className="text-gray-600">${food.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-full">
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Dashboard;
