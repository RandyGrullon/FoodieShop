import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProducts } from "../api/products";
import { isAuthenticated } from "../utils/auth";
import Cart from "@/components/Cart/Cart";

const CartPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login"); // Redirige al usuario a la página de inicio de sesión si no está autenticado
    } else {
      // Carga los productos en el carrito
      loadProducts();
    }
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts(); // Debes implementar esta función para obtener productos desde la API
      // Agregar la propiedad "quantity" a cada producto
      const productsWithQuantity = data.map((product) => ({
        ...product,
        quantity: 1, // Inicialmente, cada producto tiene una cantidad de 1
      }));
      setProducts(productsWithQuantity);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
      setLoading(false);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    // Incrementa la cantidad de un producto en el carrito
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleDecreaseQuantity = (productId) => {
    // Disminuye la cantidad de un producto en el carrito
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-2xl font-semibold mb-4">Mi Carrito de Compras</h1>
      {loading ? (
        <p className="text-lg text-gray-700">Cargando productos...</p>
      ) : (
        <Cart
          products={products}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      )}
    </div>
  );
};

export default CartPage;
