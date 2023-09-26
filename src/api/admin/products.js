import axios from 'axios';

const API_URL = 'https://food-39rc-dev.fl0.io/api/admin/products'; // Reemplaza con la URL correcta de tu API

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Crear un nuevo producto
export const createProduct = async (product) => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Actualizar un producto por su ID
export const updateProduct = async (productId, updatedProduct) => {
  try {
    const response = await axios.patch(`${API_URL}/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Eliminar un producto por su ID
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
