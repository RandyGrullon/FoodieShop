// src/api/orders.js

import axios from 'axios';

const API_BASE_URL = 'https://food-39rc-dev.fl0.io'; 


export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/orders`, orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getUserOrderHistory = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/orders/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
