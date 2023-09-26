// src/components/common/Cart.js

import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold">Carrito de Compras</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">El carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="py-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
