import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography variant="h4" align="center">
          Iniciar Sesión
        </Typography>
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;
