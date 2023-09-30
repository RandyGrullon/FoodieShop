// src/pages/menu.js
import React, { useState, useEffect } from 'react';
import Layout from '@/components/common/Layout';
import FoodMenu from '@/components/menu/FoodMenu';
import { getAllProducts } from '@/api/products';  // Import the function

const MenuPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products using the function from api/products.js
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto">
      {/* Pass the fetched products as a prop to FoodMenu */}
      <FoodMenu products={products} />
    </div>
  );
};

export default MenuPage;
