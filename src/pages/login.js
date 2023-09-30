import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";  // Importa useDispatch y useSelector
import LoginForm from "@/components/user/LoginForm";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {  // Eliminado handleLoginRedux
  const router = useRouter();
  const dispatch = useDispatch();  // Utiliza useDispatch
  const {isAuthenticated, login} = useAuth(); // Utiliza useSelector para acceder al estado de autenticación

  useEffect(() => {
    // Eliminado el manejo del localStorage
    if (isAuthenticated) {
      router.push("/");  // Redirige al inicio si el usuario ya está autenticado
    }
  }, [isAuthenticated, router]);

  const handleLogin = async (credentials) => {
    try {
      const userData = await login(credentials);
      dispatch({ type: "LOGIN", payload: userData });  // Utiliza dispatch aquí

      // Eliminado el manejo del localStorage
      router.push("/");  // Redirige al inicio
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-300">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

// Eliminadas las funciones mapStateToProps y mapDispatchToProps
// porque estamos usando useSelector y useDispatch de Redux

export default LoginPage;