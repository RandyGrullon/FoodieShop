import React from 'react';

const UserHistory = ({ orderHistory }) => {
  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-purple-800">Historial de Compras</h2>
      {orderHistory.length === 0 ? (
        <p className="text-purple-600">No hay historial de compras.</p>
      ) : (
        <ul>
          {orderHistory.map((order) => (
            <li key={order.id} className="text-purple-600">
              <p>Fecha: {order.date}</p>
              <p>Total: ${order.total}</p>
              {/* Agrega más detalles de historial de compras si es necesario */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserHistory;
