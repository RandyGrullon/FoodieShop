import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
  CardMedia,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = ({ product, onIncreaseQuantity, onDecreaseQuantity }) => {
  
    useEffect(() => {
    console.log("useEffect en CartItem");
    console.log(product);
    }
    , [product]);

  return (
    <Card className="mb-4">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={"/images/image.jpg"} // Ruta de la imagen del producto
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: ${product.price}
            </Typography>
            {/* Otros detalles del producto */}
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="Aumentar cantidad"
              onClick={() => onIncreaseQuantity(product.id)}
            >
              <AddIcon />
            </IconButton>
            <Typography variant="body2" component="span">
              {product.quantity}
            </Typography>
            <IconButton
              aria-label="Disminuir cantidad"
              onClick={() => onDecreaseQuantity(product.id)}
            >
              <RemoveIcon />
            </IconButton>
            <Button size="small" color="error">
              Eliminar
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
