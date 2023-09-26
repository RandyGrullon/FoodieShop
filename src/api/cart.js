import axios from "axios";

// Función para agregar un producto al carrito
export const addToCart = async (product) => {
  try {
    // Realiza una solicitud POST a tu API para agregar el producto al carrito
    const response = await axios.post("/api/cart/add", { product }); // Reemplaza con la ruta correcta de tu API

    // Si la API responde con éxito, puedes devolver el resultado si es necesario
    return response.data;
  } catch (error) {
    // Maneja los errores, por ejemplo, mostrando un mensaje al usuario o registrando el error
    console.error("Error al agregar el producto al carrito:", error);
    throw error; // Puedes lanzar el error para que el componente lo maneje
  }
};

// Función para eliminar un producto del carrito
export const removeFromCart = async (productId) => {
  try {
    // Realiza una solicitud DELETE a tu API para eliminar el producto del carrito
    const response = await axios.delete(`/api/cart/remove/${productId}`); // Reemplaza con la ruta correcta de tu API

    // Si la API responde con éxito, puedes devolver el resultado si es necesario
    return response.data;
  } catch (error) {
    // Maneja los errores, por ejemplo, mostrando un mensaje al usuario o registrando el error
    console.error("Error al eliminar el producto del carrito:", error);
    throw error; // Puedes lanzar el error para que el componente lo maneje
  }
};

// Función para obtener los productos en el carrito
export const getCartItems = async () => {
  try {
    // Realiza una solicitud GET a tu API para obtener los productos en el carrito
    const response = await axios.get("/api/cart/items"); // Reemplaza con la ruta correcta de tu API

    // Si la API responde con éxito, puedes devolver los productos obtenidos
    return response.data;
  } catch (error) {
    // Maneja los errores, por ejemplo, mostrando un mensaje al usuario o registrando el error
    console.error("Error al obtener los productos del carrito:", error);
    throw error; // Puedes lanzar el error para que el componente lo maneje
  }
};
