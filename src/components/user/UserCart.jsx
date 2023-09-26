import React from 'react';

const UserCart = ({ cartItems }) => {
  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-green-800">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-green-600">El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="text-green-600">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserCart;
