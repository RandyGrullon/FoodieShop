import React, { useEffect } from 'react';
import Router from 'next/router';
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { AuthProvider } from "@/context/AuthContext";
import Layout from "@/components/common/Layout";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import withAuth from "@/components/HOC/withAuth";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {

  // Revisar si hay un usuario en el localStorage justo después de montar el componente
  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      Router.replace('/login');
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default withAuth(MyApp);
