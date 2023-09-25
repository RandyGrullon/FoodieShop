import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import authApi from "../../pages/api/auth";
import Image from "next/image";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authApi.login(credentials);

      if (response && response.email) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: response.email,
            name: response.name,
            token: response.token,
          })
          
        );
        router.push(`/`);
      } else {
        setError("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError(
        "Se produjo un error al iniciar sesión. Inténtalo de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="flex items-center justify-center h-screen">
      <Card className="p-8 md:p-12 shadow-md w-full md:w-3/4">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div variant="outlined" className="w-full">
              <CardContent>
                <div className="text-center">
                  <Typography variant="h5" gutterBottom className="text-black">
                    Iniciar Sesión
                  </Typography>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <TextField
                    label="Correo Electrónico"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Contraseña"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    variant="outlined"
                    type="password"
                    required
                    fullWidth
                  />
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={loading}
                      fullWidth
                      className="bg-blue-500 text-white"
                    >
                      {loading ? (
                        <CircularProgress size={24} />
                      ) : (
                        "Iniciar Sesión"
                      )}
                    </Button>
                  </Box>
                  {error && (
                    <Typography
                      variant="body2"
                      color="error"
                      className="text-red-500"
                    >
                      {error}
                    </Typography>
                  )}
                </form>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="flex justify-center items-center h-full">
              <Image
                src="/images/foodie-login.jpg"
                alt="Foodie"
                width={500}
                height={500}
              />
            </div>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default LoginForm;
