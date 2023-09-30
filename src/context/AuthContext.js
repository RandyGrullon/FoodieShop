import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthStatus, loginUser } from "../api/auth";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isLoading: true,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = null;  // Aquí deberías obtener el token de donde lo tengas almacenado
        if (token) {
          const userData = await checkAuthStatus(token);
          setUser(userData);
          dispatch({ type: "LOGIN", payload: userData });
        }
      } catch (error) {
        console.error("Failed to verify auth:", error);
      }
      setIsLoading(false);
    };

    verifyAuth();
  }, [dispatch]);

  const login = async (credentials) => {
    try {
      const userData = await loginUser(credentials);
      setUser(userData);
      // Dispatch to Redux store
      dispatch({ type: "LOGIN", payload: userData });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    // Dispatch to Redux store
    dispatch({ type: "LOGOUT" });
  };

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
