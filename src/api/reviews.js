// src/api/reviews.js

import axios from 'axios';

const API_BASE_URL = 'https://food-39rc-dev.fl0.io'; // Reemplaza con la URL de tu API

// Función para dejar una reseña para un producto
export const leaveProductReview = async (productId, reviewData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/reviews/product/${productId}`, reviewData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Función para obtener todas las reseñas de un producto
export const getProductReviews = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/reviews/product/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
