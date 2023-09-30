import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children, pageProps }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Verifica si noLayout está definido en pageProps y si es true
  const noLayout = pageProps && pageProps.noLayout;

  return (
    <div className={`flex w-full ${noLayout ? "" : "bg-gray-100"}`}>
      {!noLayout && (
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div className="flex flex-col w-[100%]">
        {!noLayout && <Header toggleSidebar={toggleSidebar} />}
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Layout;
