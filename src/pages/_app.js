import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { AuthProvider, useAuth } from "@/context/AuthContext"; // Asegúrate de importar useAuth desde la ubicación correcta
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { user, isLoading } = useAuth(); // Utiliza user e isLoading del contexto de autenticación

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [isLoading, user, router]);  // Actualizada la lista de dependencias

  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
