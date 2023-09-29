import React, { createContext, useContext, useState, useEffect } from "react";
import { checkAuthStatus, loginUser } from "../api/auth";

const localKey = "user"; // Define una clave para el token en el localStorage

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isLoading: false,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handlePromiseError = (error) => {
    console.error(error);
  };

  const login = (userData) => {
    console.log("userData", userData);
    loginUser(userData)
      .then((userData) => {
        setUser(userData);
        // Guarda el token en el localStorage al iniciar sesión
        localStorage.setItem(localKey, userData.token);
      })
      .catch(handlePromiseError);
  };

  const logout = () => {
    setUser(null);
    // Borra el token del localStorage al cerrar sesión
    localStorage.removeItem(localKey);
  };

  useEffect(() => {
    checkAuthStatus()
      .then((userData) => {
        setUser(userData);
      })
      .catch(handlePromiseError)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const contextValue = {
    user,
    login,
    logout,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
