import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import withAuth from "@/components/HOC/withAuth";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { user, isLoading } = useAuth(); 
  
  console.log("user", user);// Utiliza user e isLoading del contexto de autenticación

  useEffect(() => {
    if (isLoading) return;  // Si la página se está cargando, no hacer nada

    if (!user && router.pathname !== '/login') {
      // Si el usuario no está autenticado, redirigir al inicio de sesión
      router.push('/login');
    } else if (user && router.pathname === '/login') {
      // Si el usuario está autenticado y está en la página de inicio de sesión, redirigir a la página de inicio
      router.push('/');
    }

  }, [isLoading, user, router]);

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

export default withAuth(MyApp);
