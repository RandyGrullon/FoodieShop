// api/auth.js
import axios from 'axios';

const API_URL = 'https://food-39rc-dev.fl0.io/api'; // Reemplaza con la URL de tu API

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const checkAuthStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/check_auth_status`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  register,
  login,
  checkAuthStatus,
};
