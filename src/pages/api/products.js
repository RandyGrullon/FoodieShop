import axios from "axios";

const API_URL = "https://food-39rc-dev.fl0.io/api"; // Reemplaza con la URL de tu API

const makeRequest = async (url, data, method = "get") => {
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

export const createProduct = async (productData) => {
  return makeRequest("/products", productData, "post");
};

export const getProducts = async () => {
  return makeRequest("/products");
};

export const getProductById = async (productId) => {
  return makeRequest(`/products/${productId}`);
};

export const updateProduct = async (productId, productData) => {
  return makeRequest(`/products/${productId}`, productData, "patch");
};

export const deleteProduct = async (productId) => {
  return makeRequest(`/products/${productId}`, null, "delete");
};

export const seedProducts = async () => {
  return makeRequest("/seed");
};