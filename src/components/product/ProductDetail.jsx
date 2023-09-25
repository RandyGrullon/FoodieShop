import React from 'react';
import { Typography, Button, makeStyles, Grid, Paper, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
  },
  addToCartButton: {
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: 'auto',
  },
}));

const ProductDetail = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={classes.imageContainer}>
          <Image src={product.imageUrl} alt={product.name} className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            ${product.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.addToCartButton}
            startIcon={<ShoppingCartIcon />}
            onClick={() => onAddToCart(product)}
          >
            Agregar al carrito
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetail;
