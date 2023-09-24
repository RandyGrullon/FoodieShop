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

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Llama a la función de inicio de sesión en el archivo auth.js
      const response = await authApi.login(credentials);

      // Verifica si la respuesta contiene datos de usuario
      if (response && response.user) {
        // Redirige a la página de perfil del usuario
        history.push('/profile');
      } else {
        setError('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Se produjo un error al iniciar sesión. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Iniciar Sesión
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Correo Electrónico"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Contraseña"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          variant="outlined"
          type="password"
          required
        />
        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Iniciar Sesión'}
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

export default LoginForm;
