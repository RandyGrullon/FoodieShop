import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard'; // Importa el componente ProductCard
import { styled } from '@mui/system'; // Importa styled

const ProductListWrapper = styled('div')({
  flexGrow: 1,
});



const ProductList = ({ products, onAddToCart }) => {
  return (
    <ProductListWrapper>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </ProductListWrapper>
  );
};

export default ProductList;
