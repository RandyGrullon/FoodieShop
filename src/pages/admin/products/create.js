import React, { useState } from 'react';
import { makeStyles, Container, Typography, TextField, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

const AdminProductCreate = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de una solicitud a la API para crear un nuevo producto
    console.log('Creando un nuevo producto con los datos:', formData);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Crear Nuevo Producto
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Descripción"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <TextField
          label="Precio"
          name="price"
          value={formData.price}
          onChange={handleChange}
          variant="outlined"
          type="number"
          required
        />
        <TextField
          label="Imagen URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Crear Producto
        </Button>
      </form>
    </Container>
  );
};

export default AdminProductCreate;
