import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";
import "../styles/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (!userFromLocalStorage) {
      // Si el usuario no está autenticado, redirige a la página de autenticación
      router.push("/auth/login");
    } else {
      setUser(userFromLocalStorage);
    }
  }, [router]); // Ejecuta esto una vez al cargar la aplicación en el cliente

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmotionThemeProvider theme={theme}>
        <div className="bg-white min-h-screen ">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
