import { useAuth } from "@/context/AuthContext";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const { user, logout } = useAuth();
  const [isLoadingSignOut, setIsLoadingSignOut] = useState(false); // Nuevo estado para carga
  // console.log(user);


  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Sign Out error:", error);
    }
  };

  return (
    <div
      className={`flex overflow-x-hidden h-screen bg-gray-800 text-white 
                sm:fixed md:relative lg:relative
                ${
                  sidebarOpen ? "duration-500 " : "-ml-64 duration-500 "
                }z-50 fixed`}
    >
      <aside className="w-64 flex flex-col ">
        <div className="h-20 bg-gray-800 flex justify-between items-center p-4">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          </Link>
          {/* Close button for mobile */}
          <button
            onClick={toggleSidebar}
            className="sm:block md:hidden lg:hidden"
          >
            X
          </button>
        </div>
        <nav
          className={`flex-1 flex flex-col flex-grow py-4 px-2 gap-10 ${
            sidebarOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            onClick={toggleSidebar} // Aquí
            className="..."
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={toggleSidebar} // Aquí
            className="..."
            href="/menu"
          >
            Menu
          </Link>
          <Link
            onClick={toggleSidebar} // Aquí
            className="..."
            href="/order"
          >
            Order
          </Link>
          <Link
            onClick={toggleSidebar} // Aquí
            className="..."
            href="/cart"
          >
            Cart
          </Link>
          {user ? (
            <>
              <Link
                onClick={toggleSidebar} // Aquí
                className="..."
                href="/profile"
              >
                Profile
              </Link>
              {/* red sign out button */}
              <button
                onClick={handleSignOut}
                className="block text-center text-black rounded-md bg-red-200  w-full py-2 hover:bg-red-500 hover:text-white duration-300"
                disabled={isLoadingSignOut} // Desactiva el botón cuando está cargando
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                {isLoadingSignOut ? "Signing Out..." : "Sign Out"}{" "}
                {/* Cambia el texto del botón durante la carga */}
              </button>
            </>
          ) : (
            <Link
              onClick={toggleSidebar} // Aquí
              className="..."
              href="/login"
            >
              Login
            </Link>
          )}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
