import axios from "axios";

export const isAuthenticated = async () => {
  try {
    // Realiza una solicitud a tu API de autenticación para verificar el estado de autenticación
    const response = await axios.get("/api/auth/check-auth"); // Reemplaza con la ruta correcta de tu API

    // Si la API responde con un código 200 (OK), consideramos al usuario autenticado
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    // Si hay un error o la API responde con un código 401 (No autorizado), consideramos al usuario no autenticado
    if (error.response && error.response.status === 401) {
      return false;
    }
  }

  // Si no se pudo determinar el estado de autenticación, devolvemos false por defecto
  return false;
};
