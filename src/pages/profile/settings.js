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

const UserSettings = ({ userId }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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
    // Simulación de una solicitud a la API para actualizar la configuración del usuario
    console.log('Enviando datos:', formData);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Configuración de la Cuenta
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
          label="Correo Electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          type="email"
          required
        />
        <TextField
          label="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
          variant="outlined"
          type="password"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Guardar Cambios
        </Button>
      </form>
    </Container>
  );
};

export default UserSettings;
