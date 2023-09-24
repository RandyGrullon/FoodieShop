import React, { useState, useEffect } from 'react';
import { makeStyles, Container, Typography, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

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

const AdminProductEdit = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  useEffect(() => {
    // Simulación de una solicitud a la API para obtener los detalles del producto a editar
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data); // Actualiza el estado con los detalles del producto
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al obtener los detalles del producto');
        }
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
      }
    };

    // Llama a la función para obtener los detalles del producto cuando se monta el componente
    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de una solicitud a la API para actualizar los detalles del producto
    console.log('Actualizando los detalles del producto con los datos:', formData);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Editar Producto
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
          Guardar Cambios
        </Button>
      </form>
    </Container>
  );
};

export default AdminProductEdit;
