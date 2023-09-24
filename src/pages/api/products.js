// api/products.js
import axios from 'axios';

const API_URL = 'https://food-39rc-dev.fl0.io/api'; // Reemplaza con la URL de tu API

const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/api/products`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.patch(`${API_URL}/api/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const seedProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/seed`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  seedProducts,
};
