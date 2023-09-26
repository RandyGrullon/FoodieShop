import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import UserProfile from "@/components/user/UserProfile";
import api from "../api/auth"; // Importa las funciones de autenticación desde utils/api

const UserProfilePage = () => {
  const [user, setUser] = useState(null); // Estado para almacenar los detalles del usuario

  useEffect(() => {
    // Llama a la API para obtener los detalles del usuario al cargar la página
    async function fetchUserProfile() {
      try {
        const response = await api.getUserProfile(); // Reemplaza con la función de la API para obtener el perfil del usuario
        setUser(response.data); // Actualiza el estado con los detalles del usuario
      } catch (error) {
        console.error("Error al cargar el perfil del usuario:", error);
      }
    }

    fetchUserProfile();
  }, []);

  return (
    <Layout>
      {user ? (
      <UserProfile />
      ) : (
        <div className="container mx-auto p-4">
          <p className="text-red-500">Error al cargar el perfil del usuario.</p>
        </div>
      )}
    </Layout>
  );
};

export default UserProfilePage;
