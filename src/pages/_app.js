import { ThemeProvider } from '@emotion/react'; // Importa ThemeProvider de Emotion
import CssBaseline from '@mui/material/CssBaseline'; // Importa CssBaseline de Material-UI
import theme from '@/styles/theme'; // Importa tu tema de Material-UI
import '../styles/globals.css'; // Importa tus estilos globales si los tienes

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
