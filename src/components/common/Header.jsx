import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "../hooks/useAuth";

const Header = ({ toggleSidebar, handleSignOut }) => {
  const auth= useAuth();
  console.log('====================================');
  console.log("auth", auth);
  console.log('====================================');
  const { cart } = useCart();

  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLoadingSignOut, setIsLoadingSignOut] = useState(false); // Nuevo estado para carga

  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="bg-gray-800 h-20 flex justify-between items-center px-8 border-2 border-b-gray-700 border-t-transparent border-x-transparent">
      <button className="p-1 mr-4 cursor-pointer" onClick={toggleSidebar}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <Link
        href="/"
        className="text-lg cursor-pointer font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
      >
        Foodie
      </Link>

      <nav
        className={
          "flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row "
        }
      >
        {auth.user && (
          <div className="flex  gap-4">
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                className="text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                <FontAwesomeIcon icon={faUser} />
                Profile
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                  <ul className="py-2 px-3">
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="block py-2 text-gray-900 hover:bg-gray-200 hover:text-gray-700 w-full text-left"
                        disabled={isLoadingSignOut} // Desactiva el botón cuando está cargando
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                        {isLoadingSignOut ? "Signing Out..." : "Sign Out"}{" "}
                        {/* Cambia el texto del botón durante la carga */}
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/cart" className="flex items-center">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-800"
              />
              (
              {totalItems > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              )
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
