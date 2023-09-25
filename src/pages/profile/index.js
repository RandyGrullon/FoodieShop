import React from "react";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import UserProfile from "@/components/Users/UserProfile";
import UserOrders from "@/components/Users/UserOrders";
import UserSettings from "@/components/Users/UserSettings";
import { AccountCircle, ShoppingBasket, Settings } from "@mui/icons-material";

const ProfilePage = () => {
  const router = useRouter();

  // Obtén el objeto del localStorage y conviértelo a objeto JavaScript
  const userFromLocalStorage = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("foodie-info-user")) : null;
  console.log(userFromLocalStorage);

  const tabs = [
    {
      label: "Perfil",
      path: `/profile/${userFromLocalStorage.id}`,
      icon: (
        <AccountCircle
          sx={{
            fontSize: 40,
          }}
        />
      ),
    },
    {
      label: "Órdenes",
      path: `/profile/${userFromLocalStorage.id}/orders`,
      icon: (
        <ShoppingBasket
          sx={{
            fontSize: 40,
          }}
        />
      ),
    },
    {
      label: "Configuración",
      path: `/profile/${userFromLocalStorage.id}/settings`,
      icon: (
        <Settings
          sx={{
            fontSize: 40,
          }}
        />
      ),
    },
  ];

  const renderTabContent = () => {
    if (userFromLocalStorage.id) {
      if (router.pathname.endsWith(`${userFromLocalStorage.id}`)) {
        return <UserProfile userId={userFromLocalStorage.id} />;
      } else if (router.pathname.endsWith(`${userFromLocalStorage.id}/orders`)) {
        return <UserOrders userId={userFromLocalStorage.id} />;
      } else if (router.pathname.endsWith(`${userFromLocalStorage.id}/settings`)) {
        return <UserSettings userId={userFromLocalStorage.id} />;
      }
    }
    return null;
  };

  return (
    <div className="bg-blue-300 h-screen text-black flex text-xl">
      <Container className="flex gap-4 justify-center items-center">
        {tabs.map((tab) => (
          <div
            onClick={() => router.push(tab.path)}
            key={tab.label}
            className="bg-white cursor-pointer  hover:border-blue-500 hover:bg-blue-500 hover:text-white duration-300 border p-2 rounded-lg w-40 h-40  flex justify-center items-center"
          >
            <div className="flex flex-col items-center ">
              {tab.icon}
              <span className="mt-2">{tab.label}</span>
            </div>
          </div>
        ))}
        {renderTabContent()}
      </Container>
    </div>
  );
};

export default ProfilePage;
