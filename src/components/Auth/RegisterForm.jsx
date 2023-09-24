import React, { useState } from 'react';
import { makeStyles, Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import { useHistory } from 'react-router-dom';
import authApi from '../../api/auth'; // Importa las funciones del archivo auth.js

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

const RegisterForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Llama a la función de registro en el archivo auth.js
      const response = await authApi.register(userData);

      // Verifica si la respuesta contiene datos de usuario
      if (response && response.user) {
        // Redirige a la página de perfil del usuario
        history.push('/profile');
      } else {
        setError('Error al registrar. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      setError('Se produjo un error al registrar. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Registrarse
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          value={userData.name}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Correo Electrónico"
          name="email"
          value={userData.email}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Contraseña"
          name="password"
          value={userData.password}
          onChange={handleChange}
          variant="outlined"
          type="password"
          required
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Registrarse'}
        </Button>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
      </form>
    </Container>
  );
};

export default RegisterForm;
