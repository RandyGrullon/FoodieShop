import axios from 'axios';

const API_BASE_URL = 'https://food-39rc-dev.fl0.io'; // Reemplaza con la URL de tu API

const createAxiosInstance = () => {
  return axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // Establece el tiempo de espera a 10 segundos (ajusta según tus necesidades)
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
    throw new Error('Error de red al comunicarse con el servidor');
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
export const checkAuthStatus = async () => {
  try {
    const response = await apiClient.get('/api/auth/check_auth_status');
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
}
