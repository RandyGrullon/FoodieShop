import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import GuestGuard from "@/components/user/auth/GuestGuard";
import AuthGuard from "@/components/user/auth/AuthGuard";
import AclGuard from "@/components/user/auth/AclGuard";
import { defaultACLObj } from "../configs/acl";
import Head from "next/head";
import Spinner from "@/components/Spinner";

const Guard = ({ children, authGuard, guestGuard }) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>;
  }
};

function MyApp({ Component, pageProps }) {
  const authGuard = Component.authGuard ?? true;
  const guestGuard = Component.guestGuard ?? false;
  const aclAbilities = Component.acl ?? defaultACLObj;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <CartProvider>
            <Head>
              <title>Your App Title</title>
              <meta name="description" content="Your App Description" />
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <Guard authGuard={authGuard} guestGuard={guestGuard}>
              <AclGuard
                aclAbilities={aclAbilities}
                guestGuard={guestGuard}
                authGuard={authGuard}
              >
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AclGuard>
            </Guard>
          </CartProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
