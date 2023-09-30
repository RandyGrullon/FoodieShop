// api/auth.js

import axios from 'axios';

const API_BASE_URL = 'https://food-39rc-dev.fl0.io'; // Reemplaza con la URL de tu API

const createAxiosInstance = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null; // Verifica si estamos en el navegador antes de acceder a localStorage

  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : '', // Agrega el token de autorización solo si está disponible
    },
  });
};

const handleError = (error) => {
  if (error.response) {
    // La solicitud fue hecha y el servidor respondió con un código de estado que no está en el rango 2xx
    console.error('Error de respuesta:', error.response.data);
    throw new Error('Error de respuesta del servidor');
  } else if (error.request) {
    // La solicitud fue hecha pero no se recibió respuesta o hubo un problema en la red
    console.error('Error de red:', error.request);
    throw error('Error de red al comunicarse con el servidor');
  } else {
    // Algo sucedió en la configuración de la solicitud que desencadenó un error
    console.error('Error en la solicitud:', error.message);
    throw new Error('Error al realizar la solicitud');
  }
};

const apiClient = createAxiosInstance();

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Función para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Función para verificar el estado de autenticación
export const checkAuthStatus = async (token = null) => {
  const customApiClient = token 
    ? axios.create({
        baseURL: API_BASE_URL,
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
    : apiClient;

  try {
    const response = await customApiClient.get('/api/auth/checkStatus');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const logout = async () => {
  try {
    const response = await apiClient.post('/api/auth/logout');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
