import axios from 'axios';

const API_URL = 'https://food-39rc-dev.fl0.io/api/admin/menu'; 

export const getAllMenuItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMenuItem = async (menuItem) => {
  try {
    const response = await axios.post(API_URL, menuItem);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMenuItem = async (menuItemId, updatedMenuItem) => {
  try {
    const response = await axios.patch(`${API_URL}/${menuItemId}`, updatedMenuItem);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMenuItem = async (menuItemId) => {
  try {
    const response = await axios.delete(`${API_URL}/${menuItemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
