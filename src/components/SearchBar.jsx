import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-white rounded-full">
      <div className="flex justify-center">
        <div className="w-96">
          <div className="flex items-center rounded-md p-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
            <input
              className="flex-1 appearance-none outline-none border-none py-1 px-2 leading-5"
              type="text"
              placeholder="Buscar productos"
              aria-label="buscar productos"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
