import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex  w-full  ">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex flex-col w-[100%] ">
        <Header toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
