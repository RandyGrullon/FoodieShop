import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const auth = useAuth();
  console.log('====================================');
  console.log(auth);
  console.log('====================================');
  const [isLoadingSignOut, setIsLoadingSignOut] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsLoadingSignOut(true);

    try {
      await logout();

      setProfileMenuOpen(false);

      router.push("/login");
    } catch (error) {
      console.error("Sign Out error:", error);
    } finally {
      setIsLoadingSignOut(false);
    }
  };


  return (
    <div
      className={`flex overflow-x-hidden h-screen bg-gray-800 text-white 
                sm:fixed md:relative lg:relative
                ${
                  sidebarOpen ? "duration-500 " : "-ml-[390px] duration-500 "
                }z-50 fixed`}
    >
      <aside className="w-[390px] flex flex-col ">
        <div className="h-20 bg-gray-800 flex justify-between items-center p-4 lg:justify-center">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          </Link>
          {/* Close button for mobile */}
          <button
            onClick={toggleSidebar}
            className="sm:block md:hidden lg:hidden"
          >
            {/* //font awesome  x */}
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                fillRule="evenodd"
                d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z"
              />
            </svg>
          </button>
        </div>
        <div className="mx-auto lg:mx-3">
          <nav
            className={`flex-1 underline  flex-col flex-grow py-4 px-2 gap-10 ${
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
            {auth.user ? (
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
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
