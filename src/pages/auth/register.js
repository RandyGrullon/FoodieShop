import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography variant="h4" align="center">
          Registrarse
        </Typography>
        <RegisterForm />
      </div>
    </Container>
  );
};

export default RegisterPage;
