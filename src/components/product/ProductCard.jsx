import React from 'react';
import { Card, CardContent, CardMedia, Typography, makeStyles, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio for the image
  },
  cardContent: {
    flexGrow: 1,
  },
  iconButton: {
    marginLeft: 'auto',
  },
}));

const ProductCard = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.imageUrl} // Reemplaza con la URL de la imagen del producto
        title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
      <IconButton
        className={classes.iconButton}
        color="primary"
        aria-label="Agregar al carrito"
        onClick={() => onAddToCart(product)}
      >
        <ShoppingCartIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
