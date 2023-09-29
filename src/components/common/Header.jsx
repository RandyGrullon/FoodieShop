import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ toggleSidebar }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLoadingSignOut, setIsLoadingSignOut] = useState(false); // Nuevo estado para carga
  const router = useRouter();

  console.log("user", user);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleSignOut = async () => {
    // Activar la carga
    setIsLoadingSignOut(true);

    try {
      // Realiza la acción de cierre de sesión
      await logout();

      // Cierra el menú de perfil después de cerrar sesión
      setProfileMenuOpen(false);

      //timout loading
      setTimeout(() => {
        router.push("/");
      }, 2000);

      // Redirige a la página de inicio
    } catch (error) {
      console.error("Sign Out error:", error);
    } finally {
      // Desactivar la carga, independientemente de si fue exitoso o no
      setIsLoadingSignOut(false);
    }
  };

  return (
    <div className="bg-gray-300 h-20 flex justify-between items-center px-8 border-2 border-b-black">
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
        {!user ? (
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
