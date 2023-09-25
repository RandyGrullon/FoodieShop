import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import LoginForm from '@/components/Auth/LoginForm';

const LoginPage = () => {
  return (
    <Container component="main">
      <CssBaseline />
      <div>
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginPage;
