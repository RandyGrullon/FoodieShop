import React, { useState } from 'react';
import AdminMenuForm from '../components/admin/adminMenuForm'; // Importa el formulario de Menú
import AdminProductForm from '../components/admin/adminProductForm'; // Importa el formulario de Producto

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('menu'); // Estado para controlar la pestaña seleccionada

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/5  text-black">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedTab === 'menu' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => setSelectedTab('menu')}
          >
            Menú
          </button>
          <button
            className={`px-4 py-2 ml-4 rounded-full ${
              selectedTab === 'product' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => setSelectedTab('product')}
          >
            Producto
          </button>
        </div>
        {selectedTab === 'menu' ? (
          <AdminMenuForm onSubmit={(newMenu) => handleMenuSubmit(newMenu)} />
        ) : (
          <AdminProductForm onSubmit={(newProduct) => handleProductSubmit(newProduct)} />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
