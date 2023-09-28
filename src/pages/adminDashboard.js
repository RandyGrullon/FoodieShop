import React, { useState } from "react";
import AdminMenuForm from "../components/admin/adminMenuForm";
import AdminProductForm from "../components/admin/adminProductForm";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("menu");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white pb-8  rounded-lg shadow-lg w-2/5 text-black">
        <div className="flex w-full justify-center">
          <TabButton
            tab="menu"
            selectedTab={selectedTab}
            onClick={handleTabClick}
          >
            Menú
          </TabButton>
          <TabButton
            tab="product"
            selectedTab={selectedTab}
            onClick={handleTabClick}
          >
            Producto
          </TabButton>
        </div>
        <div className="px-8 py-4">

        {selectedTab === "menu" ? (
            <AdminMenuForm onSubmit={(newMenu) => handleMenuSubmit(newMenu)} />
        ) : (
            <AdminProductForm
            onSubmit={(newProduct) => handleProductSubmit(newProduct)}
            />
            )}
            </div>
      </div>
    </div>
  );
};

const TabButton = ({ tab, selectedTab, onClick, children }) => (
  <button
    className={`flex-grow p-4 ${
      selectedTab === tab
        ? "bg-blue-500 text-white"
        : "bg-gray-300 text-gray-600"
    }`}
    onClick={() => onClick(tab)}
  >
    {children}
  </button>
);

export default AdminDashboard;
