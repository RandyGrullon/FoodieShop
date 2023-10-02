import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import authConfig from "../configs/auth" // Asegúrate de que esta ruta sea correcta
import { useDispatch } from 'react-redux';
import { loginUser, checkAuthStatus } from '../api/auth';


// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName);
      if (storedToken) {
        setLoading(true);
        try {
          const userData = await checkAuthStatus(storedToken);
          setLoading(false);
          setUser(userData);
          dispatch({ type: "LOGIN", payload: userData });
        } catch (error) {
          console.error("Failed to verify auth:", error);
          setLoading(false);
          setUser(null);
          if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
            router.replace('/login');
          }
        }
      } else {
        setLoading(false);
      }
    };
    initAuth();
  }, [dispatch, router]);

 

  const handleLogin = async (params, errorCallback) => {
    try {
      const userData = await loginUser(params);
      
      const returnUrl = router.query.returnUrl;
      setUser(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/';
      router.replace(redirectURL);
      dispatch({ type: "LOGIN", payload: userData });
    } catch (err) {
      if (errorCallback) errorCallback(err);
    }
  };

  const handleLogout = () => {
    setUser(null);
    dispatch({ type: "LOGOUT" });
    router.push('/login');
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
