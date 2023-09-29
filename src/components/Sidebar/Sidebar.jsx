import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`flex overflow-x-hidden h-screen bg-gray-800 text-white ${
        sidebarOpen ? "duration-500" : "-ml-64 duration-500"
      }`}
    >
      <aside className="w-64 flex flex-col ">
        <div className="h-20 bg-gray-800 flex justify-center items-center ">
          <Link
            href="/"
            className="text-lg cursor-pointer font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          </Link>
        </div>
        <nav
          className={`flex-1 flex flex-col flex-grow py-4 gap-10   ${
            sidebarOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/"
          >
            Home
          </Link>
          {/* menu */}
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="/adminDashboard"
          >
            Admin Creator
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
