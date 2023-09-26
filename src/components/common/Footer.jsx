// src/components/common/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-gray-700">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} FoodieShop. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
