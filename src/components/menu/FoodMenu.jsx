import React, { useState } from "react";

const FoodMenu = () => {
  // Supongamos que tienes un array de alimentos
  const [foodItems, setFoodItems] = useState([
    {
      id: 1,
      name: "Hamburguesa",
      description: "Una deliciosa hamburguesa con queso y papas fritas.",
      price: 10.99,
    },
    {
      id: 2,
      name: "Pizza",
      description: "Una pizza recién horneada con tus ingredientes favoritos.",
      price: 12.99,
    },
    // Agrega más alimentos aquí
    {
      id: 3,
      name: "Ensalada",
      description: "Una ensalada fresca con aderezo de tu elección.",
      price: 6.99,
    },
    {
      id: 4,
      name: "Alitas de Pollo",
      description: "Alitas de pollo con salsa picante.",
      price: 8.99,
    },
    {
      id: 5,
      name: "Sopa",
      description: "Sopa de pollo con fideos.",
      price: 4.99,
    },
    {
      id: 6,
      name: "Papas Fritas",
      description: "Papas fritas con salsa de tomate.",
      price: 3.99,
    },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Menú de Alimentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems.map((food) => (
          <div
            key={food.id}
            className="border rounded-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold">{food.name}</h3>
            <p className="text-gray-600 mb-2">{food.description}</p>
            <p className="text-blue-600 font-bold">${food.price.toFixed(2)}</p>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none"
              // Agrega lógica para agregar al carrito aquí
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
