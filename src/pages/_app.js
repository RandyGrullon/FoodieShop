import { useEffect } from "react";
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

  useEffect(() => {
    const token = localStorage.getItem("foodie-token");

    if (token) {
    } else {
      router.push("/auth/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EmotionThemeProvider theme={theme}>
          <Navbar />
        <Component {...pageProps} />
          <Footer />
      </EmotionThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
