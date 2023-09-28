import React, { useContext } from "react";
import {  useAuth } from "../../context/AuthContext"; // Asegúrate de que esta ubicación sea la correcta
import Link from "next/link";

const Header = ({ toggleSidebar }) => {
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated);

  return (
    <div className="bg-gray-300 h-20  flex justify-between items-center px-8 border-2 border-b-gray-300">
      <button className="p-1 mr-4 cursor-pointer" onClick={toggleSidebar}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
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
        className="text-lg cursor-pointer font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
      >
        Foodie
      </Link>
      <nav
        className={
          "flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row "
        }
      >
        {isAuthenticated ? (
          <Link
            href="/profile"
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Profile
          </Link>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
