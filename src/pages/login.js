import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import LoginForm from "@/components/user/LoginForm";
import { loginUser } from "../api/auth"; // Importa la función loginUser desde tu API de autenticación
import { useAuth } from "../context/AuthContext"; // Importa useAuth desde tu contexto de autenticación

const LoginPage = ({ handleLogin }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth(); // Obtén el estado de autenticación del contexto

  // Verificar si el usuario ya está autenticado al cargar la página
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (isAuthenticated || storedUser) {
      // Si estás autenticado en el contexto o tienes información de usuario en localStorage, redirige a la página de inicio
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="min-h-screen flex justify-center bg-gray-300">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: async (credentials) => {
    try {
      const userData = await loginUser(credentials); // Utiliza el método de autenticación loginUser
      // Actualiza el estado de autenticación en Redux
      dispatch({ type: "LOGIN", payload: userData });

      // Guarda la información de sesión en localStorage
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Login error:", error);
      // Maneja el error de autenticación aquí
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
