// components/Layout.js

import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../common/Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex w-full bg-gray-100`}>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex flex-col w-[100%]">
        <Header toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
