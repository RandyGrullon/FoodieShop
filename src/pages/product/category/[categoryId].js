import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProductList from '../../components/product/ProductList';
import ProductCard from '../../components/product/ProductCard';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Simulación de una solicitud a la API para obtener los detalles de la categoría
    const fetchCategoryDetails = async () => {
      try {
        const response = await fetch(`/api/categories/${categoryId}`);
        if (response.ok) {
          const data = await response.json();
          setCategory(data); // Actualiza el estado con los detalles de la categoría
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al obtener los detalles de la categoría');
        }
      } catch (error) {
        console.error('Error al obtener los detalles de la categoría:', error);
      }
    };

    // Simulación de una solicitud a la API para obtener productos en la categoría
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`/api/categories/${categoryId}/products`);
        if (response.ok) {
          const data = await response.json();
          setCategoryProducts(data); // Actualiza el estado con los productos de la categoría
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al obtener los productos de la categoría');
        }
      } catch (error) {
        console.error('Error al obtener los productos de la categoría:', error);
      }
    };

    // Llama a las funciones para obtener los detalles de la categoría y los productos de la categoría
    fetchCategoryDetails();
    fetchCategoryProducts();
  }, [categoryId]);

  if (!category) {
    // Muestra un mensaje de carga mientras se obtienen los detalles de la categoría
    return <div>Cargando...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Categoría: {category.name}
      </Typography>
      <ProductList products={categoryProducts} />
    </Container>
  );
};

export default CategoryPage;
