import React, { useState } from 'react';
import { makeStyles, Paper, Typography, TextField, Button, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const AdminProductEdit = ({ product, onSaveProduct }) => {
  const classes = useStyles();

  const [name, setName] = useState(product.name || '');
  const [price, setPrice] = useState(product.price || '');
  const [stock, setStock] = useState(product.stock || '');

  const handleSaveProduct = () => {
    const updatedProduct = {
      ...product,
      name,
      price,
      stock,
    };
    onSaveProduct(updatedProduct);
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h5" gutterBottom>
        Editar Producto
      </Typography>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={handleSaveProduct}
        >
          Guardar Producto
        </Button>
      </form>
    </Paper>
  );
};

export default AdminProductEdit;
