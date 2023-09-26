import React, { useState } from 'react';

const AdminProductForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };
    onSubmit(newProduct);
    // Lógica para enviar el nuevo producto al servidor o API aquí
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Formulario de Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-600">Nombre del Producto</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productPrice" className="block text-gray-600">Precio del Producto</label>
          <input
            type="text"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-gray-600">Descripción del Producto</label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full h-40"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
        >
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default AdminProductForm;
