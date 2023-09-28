import React, { useState } from "react";
import AdminMenuForm from "@/components/Admin/AdminMenuForm";
import AdminFoodForm from "@/components/Admin/AdminFoodForm";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("menu"); // Estado para rastrear la pestaña activa

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center pt-10">
        <button
          className={`px-4 py- ${
            activeTab === "menu"
              ? "bg-sky-100 rounded-tl-md  duration-500"
              : "bg-gray-200  rounded-tl-md duration-500"
          }`}
          onClick={() => handleTabChange("menu")}
        >
          Menú
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "Food"
              ? "bg-sky-100 rounded-tr-md duration-500 "
              : "bg-gray-200  rounded-tr-md shadow-r-lg duration-500"
          }`}
          onClick={() => handleTabChange("Food")}
        >
          Comida
        </button>
      </div>
      <div className="">
        {activeTab === "menu" ? <AdminMenuForm /> : null}
        {activeTab === "Food" ? <AdminFoodForm /> : null}
      </div>
    </div>
  );
};

export default AdminDashboard;
