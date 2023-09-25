import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProductCard from '../components/product/ProductCard';
import ProductDetail from '../components/product/ProductDetail';
import ProductList from '../components/product/ProductList';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Simulación de una solicitud a la API para obtener los detalles del producto
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data); // Actualiza el estado con los detalles del producto
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al obtener los detalles del producto');
        }
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
      }
    };

    // Simulación de una solicitud a la API para obtener productos relacionados
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch('/api/products/related'); // Reemplaza con la lógica adecuada
        if (response.ok) {
          const data = await response.json();
          setRelatedProducts(data); // Actualiza el estado con los productos relacionados
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al obtener productos relacionados');
        }
      } catch (error) {
        console.error('Error al obtener productos relacionados:', error);
      }
    };

    // Llama a las funciones para obtener los detalles del producto y productos relacionados
    fetchProductDetails();
    fetchRelatedProducts();
  }, [productId]);

  if (!product) {
    // Muestra un mensaje de carga mientras se obtienen los detalles del producto
    return <div>Cargando...</div>;
  }

  // Define tu función onAddToCart aquí o importala desde donde esté definida.
  const tuFuncionOnAddToCart = (product) => {
    // Implementa la lógica para agregar el producto al carrito aquí.
    // Puedes usar el estado global del carrito o realizar una solicitud a la API, según tu aplicación.
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Detalles del Producto
      </Typography>
      <ProductCard product={product} onAddToCart={tuFuncionOnAddToCart} />
      <ProductDetail product={product} />
      <Typography variant="h5" gutterBottom>
        Productos Relacionados
      </Typography>
      <ProductList products={relatedProducts} />
    </Container>
  );
};

export default ProductDetailPage;
