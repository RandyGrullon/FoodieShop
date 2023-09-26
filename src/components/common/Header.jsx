// src/components/common/Header.js

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          FoodieShop
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/menu">Menú</Link>
          </li>
          <li>
            <Link href="/cart">Carrito</Link>
          </li>
          <li>
            <Link href="/profile">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
