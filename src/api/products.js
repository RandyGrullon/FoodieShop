// src/api/products.js

import axios from 'axios';

const API_BASE_URL = 'https://food-39rc-dev.fl0.io'; // Reemplaza con la URL de tu API

// Función para obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para obtener un producto por su ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para actualizar un producto por su ID
export const updateProductById = async (productId, updatedProductData) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/api/products/${productId}`, updatedProductData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para eliminar un producto por su ID
export const deleteProductById = async (productId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
