import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/material';
import ProductCard from './ProductCard'; // Importa el componente ProductCard

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ProductList = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
            {/* Renderiza el componente ProductCard con el producto y la función onAddToCart */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
