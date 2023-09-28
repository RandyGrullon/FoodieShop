import React, { useEffect, useState } from "react";
import api from "../api/auth"; // Importa las funciones de autenticación desde utils/api

const UserDataInfo = {
  
    "id": 1,
    "username": "admin",
    "email": "",
    "first_name": "Admin",

  
}

const UserProfilePage = () => {
  const [user, setUser] = useState(UserDataInfo); // Estado para almacenar los detalles del usuario

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
    <div className="bg-white p-4">
      {user ? (
        <div className="p-4 border-2 border-gray-500">
          {/* <UserProfile 
            user={user} 
            onSubmit={(newUser) => handleUserSubmit(newUser)}
          /> */}
        </div>
      ) : (
        <div className="container mx-auto p-4 border-2 border-gray-500 text-center">
          <p className="text-red-500">Error al cargar el perfil del usuario.</p>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
