import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { user: authUser, isLoading } = useAuth();

  // Recuperar información de sesión almacenada en localStorage al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // Parsea la información de sesión almacenada
      const userData = JSON.parse(storedUser);

      // Actualiza el estado de autenticación en tu almacenamiento Redux
      store.dispatch({ type: "LOGIN", payload: userData });
    }
  }, []);

  useEffect(() => {
    if (!authUser && !isLoading) {
      router.push("/login");
    }
  }, [authUser, isLoading]);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
