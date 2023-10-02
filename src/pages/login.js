import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux"; // Importa useDispatch y useSelector
import LoginForm from "@/components/user/LoginForm";
import BlankLayout from "@/components/user/auth/AclGuard";
import { useAuth } from "@/components/hooks/useAuth";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth  = useAuth();


  const handleLogin = async (credentials) => {
    try {
      const userData = await auth.login(credentials);
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

LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage;
