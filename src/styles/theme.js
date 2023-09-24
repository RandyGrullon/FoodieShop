import { createTheme } from '@mui/material/styles';

// Define los colores personalizados
const customColors = {
  primary: {
    main: '#007ACC', // Color primario
  },
  secondary: {
    main: '#FF6B6B', // Color secundario
  },
};

// Crea el tema personalizado
const theme = createTheme({
  palette: {
    primary: customColors.primary,
    secondary: customColors.secondary,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    // Define aquí tus estilos de tipografía personalizados
  },
  // Define aquí otros ajustes de tema, como espaciado, bordes, etc.
});

export default theme;
