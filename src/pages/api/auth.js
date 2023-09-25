import axios from 'axios';

const API_URL = 'https://food-39rc-dev.fl0.io/api'; // Reemplaza con la URL de tu API

const makeRequest = async (url, data, method = 'get') => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const register = async (userData) => {
  return makeRequest('/auth/register', userData, 'post');
};

const login = async (credentials) => {
  return makeRequest('/auth/login', credentials, 'post');
};

const checkAuthStatus = async () => {
  return makeRequest('/auth/check_auth_status');
};

export default {
  register,
  login,
  checkAuthStatus,
};
