// api/orders.js
import axios from 'axios';

const API_URL = 'https://food-39rc-dev.fl0.io/api'; // Reemplaza con la URL de tu API

const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/api/orders`, orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/orders`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/api/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateOrder = async (orderId, orderData) => {
  try {
    const response = await axios.patch(`${API_URL}/api/orders/${orderId}`, orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
