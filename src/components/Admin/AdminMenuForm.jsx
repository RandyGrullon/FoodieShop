import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminMenuForm = ({ onSubmit }) => {
  const [menuName, setMenuName] = useState('');
  const [menuDescription, setMenuDescription] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  const handleItemChange = (index, value) => {
    const updatedItems = [...menuItems];
    updatedItems[index] = value;
    setMenuItems(updatedItems);
  };

  const handleDeleteItem = (indexToDelete) => {
    const updatedItems = menuItems.filter((_, index) => index !== indexToDelete);
    setMenuItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenu = {
      name: menuName,
      description: menuDescription,
      items: menuItems,
    };
    onSubmit(newMenu);
    // Lógica para enviar el nuevo menú al servidor o API aquí
  };

  return (
    <div className='min-w-40'>
      <h2 className="text-2xl font-semibold">Formulario de Menú</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="menuName" className="block text-gray-600">Nombre del Menú</label>
          <input
            type="text"
            id="menuName"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="menuDescription" className="block text-gray-600">Descripción del Menú</label>
          <textarea
            id="menuDescription"
            value={menuDescription}
            onChange={(e) => setMenuDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full h-40"
          />
        </div>
        <div className="mb-4 text-black ">
          <label className="block text-gray-600">Item del Menú</label>
          { menuItems.map((item, index) => (
            <div key={index} className="flex items-center">
              hola
              <div className='border-2'></div>
              <button
                type="button"
                onClick={() => handleDeleteItem(index)}
                className="ml-2 p-2 text-red-600 hover:text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setMenuItems([...menuItems, ''])}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          >
            Agregar Item
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
        >
          Crear Menú
        </button>
      </form>
    </div>
  );
};

export default AdminMenuForm;
