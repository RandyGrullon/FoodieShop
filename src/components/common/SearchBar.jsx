// src/components/common/SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold">Buscar Alimentos</h2>
      <input
        type="text"
        className="border rounded w-full py-2 px-3 mt-2"
        placeholder="Ingrese el nombre del alimento"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-full"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
