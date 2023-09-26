// src/api/auth.js

import axios from 'axios';

const API_BASE_URL = 'https://food-39rc-dev.fl0.io'; // Reemplaza con la URL de tu API

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para verificar el estado de autenticación
export const checkAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/check_auth_status`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
