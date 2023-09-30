import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";  // Importa useDispatch y useSelector
import LoginForm from "@/components/user/LoginForm";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {  
  const router = useRouter();
  const dispatch = useDispatch();  
  const {isAuthenticated, login} = useAuth(); 

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); 
    }
  }, [isAuthenticated, router]);

  const handleLogin = async (credentials) => {
    try {
      const userData = await login(credentials);
      dispatch({ type: "LOGIN", payload: userData });

      router.push("/"); 
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


export default LoginPage;