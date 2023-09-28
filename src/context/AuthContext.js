import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    isLoading: false
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const login = async () => {
    const response = await fetch("/api/auth/login");  
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
    }
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const response = await fetch("/api/check-auth"); 
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  const contextValue = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
